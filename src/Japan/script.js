const title = document.querySelector("h1");
const flagImg = document.getElementById("flag");
const foundation = document.getElementById("found");
const nationalLanguage = document.getElementById("language");
const countryCapital = document.getElementById("capital");
const countryAnthem = document.getElementById("anthem");
const countrySeal = document.getElementById("seal");
const countryLocation = document.getElementById("location");
const countryPopulation = document.getElementById("population");
const nationalCurrency = document.getElementById("currency");
const countryTimeZone = document.getElementById("timeZone")

const getData = async () => {
    const response = await fetch("https://alexandra376.github.io/Project_20/src/Api/data.json");
    const data = await response.json();
    const {name, flag, found, language, capital, anthem, seal, location, population, currency, timeZone} = data
    title.textContent = name;
    flagImg.src = flag;
    foundation.textContent = found;
    nationalLanguage.textContent = language;
    countryCapital.textContent = capital;
    countryAnthem.textContent = anthem;
    countrySeal.src = seal;
    countryLocation.src = location;
    countryPopulation.textContent = population;
    nationalCurrency.textContent = currency;
    countryTimeZone.textContent = timeZone;
}
getData();
