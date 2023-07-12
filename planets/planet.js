const planetInfo = document.getElementById("planetInfo");

document.addEventListener("DOMContentLoaded", (e) => {
  const urlParams = new URLSearchParams(window.location.search);
  const planetUrl = urlParams.get("planet");

  fetch(planetUrl)
    .then((response) => response.json())
    .then((planet) => {
      const planetName = planet.name;
      const planetPopulation = planet.population;
      const planetRotation = planet.rotation_period;
      const planetOrbital = planet.orbital_period;
      const planetClimate = planet.climate;
      const planetGravity = planet.gravity;
      const planetTerrain = planet.terrain;

      const planetInfoHTML = `<h2>Planet: ${planetName}</h2>
                                    <p> Population: ${planetPopulation}</p>
                                    <p> Planet Rotation: ${planetRotation}</p>
                                    <p> Orbital period: ${planetOrbital}</p>
                                    <p> Climate: ${planetClimate}</p>
                                    <p> Gravity: ${planetGravity}</p>
                                    <p> Planet Terrain: ${planetTerrain}</p>`;
      planetInfo.innerHTML = planetInfoHTML;
    });
});
