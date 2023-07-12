const url = "http://swapi.dev/api/people?page=2"
const section = document.querySelector(".section")
const searchButton = document.querySelector("#submitButton")
const searchInput = document.querySelector("#searchInput")


window.addEventListener("DOMContentLoaded" , function getData () {
    fetch(url)
    .then(data => data.json ())
    .then(json => {
        console.log(json)

        for(i=0 ; i < json.results.length; i++) {
        section.innerHTML += `<article class="card">
        <h2>${json.results[i].name}</h2>
        <p><strong>Birth Year: </strong>${json.results[i].birth_year}</p>
        <p><strong>Hair Color: </strong>${json.results[i].hair_color}</P>
        <button value="${json.results[i].homeworld}">Character Home Planet</button>`
        const planetButton = document.querySelector("button")
        
        
        planetButton.addEventListener("click", function() {
            const homePlanet = this.value
            window.location.href = `./planets/planet.html?value=${homePlanet}`;
            console.log(`${json.results[i].homeworld}`)
            
        })
        }
        searchButton.addEventListener("click", function() {
            let query = searchInput.value;
            performSearch(query);
        })

        function performSearch(query) {
            console.log(`Performing search for:`, query)
        }
    })
    .catch(error => {
        console.error(`Error`, error);
    });

});