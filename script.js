const url = "http://swapi.dev/api/people?page=2";
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
          <article class="card">
            <h2>${data.results[i].name}</h2>
            <p><strong>Birth Year: </strong>${data.results[i].birth_year}</p>
            <p><strong>Hair Color: </strong>${data.results[i].hair_color}</p>
            <button class="characterButton" value="${data.results[i].homeworld}">Character Home Planet</button>
          </article>
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

  const searchInput = document.getElementById("searchInput").value;

  fetch(
    `"http://swapi.dev/api/people?page=2"${encodeURIComponent(searchInput)}`
  )
    .then((response) => response.json())
    .then((data) => {
      // Handle API response
      console.log("API Response:", data);
      // Display or process the retrieved character information
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
