fetch("https://restcountries.eu/rest/v2/all")
.then(response => response.json())
.then(data => displayCountries(data));

const displayCountries = countries => {
    const countriesDiv = document.getElementById("countries");
    countries.forEach(country => {
        const countryDiv = document.createElement("div");
        countryDiv.className = "country";

        const countryInfo = `
            <h3 class="country-name">${country.name}</h3>
            <p>${country.capital}</p>
            <button onclick="displayCountryDetail('${country.name}')">Details</button>
        `
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    });
    // for (let i = 0; i < countries.length; i++) {
    //     const country = countries[i];
    //     const countryDiv = document.createElement("div");
    //     countryDiv.className = "country";

    //     const countryInfo = `
    //     <h3 class="country-name">${country.name}</h3>
    //     <p>${country.capital}</p>
    //     `
    //     countryDiv.innerHTML = countryInfo;
    //     countriesDiv.appendChild(countryDiv);
    // }
}

const displayCountryDetail = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => renderCountryInfo(data[0]))
}

const renderCountryInfo = country => {
    const countryDiv = document.getElementById("country-detail");
    countryDiv.innerHTML = `
        <h1>${country.name}</h1>
        <p>Population: ${country.population}</p>
        <p>Area: ${country.area}</p>
        <img width="200" src="${country.flag}" >
    `
}