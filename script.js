const url = "http://swapi.dev/api/people?page=1";
const section = document.querySelector("section");
const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton");
const form = document.querySelector("form");

window.addEventListener("DOMContentLoaded", function getData() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      

      for (let i = 0; i < data.results.length; i++) {
        section.innerHTML += `
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${data.results[i].name}</h5>
      <p class="card-text"><strong>Birth Year: </strong>${data.results[i].birth_year}</p>
      <p class="card-text"><strong>Hair Color: </strong>${data.results[i].hair_color}</p>
      <button class="btn btn-primary characterButton" value="${data.results[i].homeworld}">Character Home Planet</button>
    </div>
  </div>
`;

      }

      const planetButtons = document.querySelectorAll(".characterButton");
      planetButtons.forEach((button) => {
        button.addEventListener("click", handlePlanetButtonClick);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

function handlePlanetButtonClick(event) {
  const homeworld = event.target.value;
  const planetURL = `./planets/planet.html?planet=${encodeURIComponent(
    homeworld
  )}`;
  window.location.href = planetURL;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const searchValue = searchInput.value;

  const apiUrl = `https://swapi.dev/api/people/?search=${searchValue}`;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.results && data.results.length > 0) {
        const characters = data.results;

      

        characters.forEach((character) => {
          section.innerHTML += `
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${character.name}</h5>
              <p class="card-text"><strong>Birth Year: </strong>${character.birth_year}</p>
              <p class="card-text"><strong>Hair Color: </strong>${character.hair_color}</p>
              <button class="btn btn-primary characterButton" value="${character.homeworld}">Character Home Planet</button>
            </div>
          </div>
        `;
        });

        const planetButtons = document.querySelectorAll(".characterButton");
        planetButtons.forEach((button) => {
          button.addEventListener("click", handlePlanetButtonClick);
        });
      } else {
        section.innerHTML = `<p class="errorMessage">No characters found.</p>`;
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});





