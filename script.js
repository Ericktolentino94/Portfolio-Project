const url = "http://swapi.dev/api/people"
const section = document.querySelector(".section")

console.log(section)

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
        <button>Character Vehichle</button>`
        }
    })
    .catch(error => {
        console.error(`Error`, error);
    });

});