let searchbutton = document.querySelector('.searchbut');
const cityInput = document.querySelector('.cityin');   // ✅ needed for suggestions
const suggestionsBox = document.querySelector('.suggestions');
const APIkey = "3344832fbc24294f39bfce7c492eb259";

searchbutton.addEventListener('click', checkweather);

cityInput.addEventListener('keydown', (event)=> {
    if (event.key === "Enter") {
        checkweather();
    }
});

/* ================= WEATHER ================= */

async function checkweather() {
    let place = cityInput.value.trim().toLowerCase();

    if (place === "") {
        alert("Please enter a city name");
        return;
    }

    const APIurl = `https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${place}&appid=${APIkey}`;

    const response = await fetch(APIurl);
    const data = await response.json();

    if (data.cod !== "200") {
        alert(data.message);
        cityInput.value = '';
        return;
    }

    const current = data.list[0];

    // current weather UI
    setimage(current);

    document.querySelector('.place').innerHTML = data.city.name;
    document.querySelector('.weather-upd').innerHTML =
        Math.round(current.main.temp) + "°C";

    document.querySelector('.weather-sp').innerHTML =
        Math.round(current.wind.speed * 3.6) + " km/h";

    document.querySelector('.weather-hum').innerHTML =
        current.main.humidity + "%";

    renderHourly(data);

    cityInput.value = '';
    suggestionsBox.innerHTML = ''; 
}

function setimage(item){
    const weatherImg = document.querySelector('.weather-img');

    const main = item.weather[0].main.toLowerCase();

    if (main === "clear") {
        weatherImg.src = "./images/sun.png";
    } else if (main === "clouds") {
        weatherImg.src = "./images/clouds.png";
    } else if (main === "rain" || main === "drizzle") {
        weatherImg.src = "./images/rainy.png";
    } else if (main === "snow") {
        weatherImg.src = "./images/snow.png";
    } else {
        weatherImg.src = "./images/clouds.png";
    }
}

function renderHourly(data) {
    const hourlyRow = document.querySelector('.hourly-row');
    hourlyRow.innerHTML = '';

    const nextHours = data.list.slice(0, 8); 

    nextHours.forEach(item => {
        const time = item.dt_txt.split(' ')[1].slice(0, 5);
        const temp = Math.round(item.main.temp);
        const icon = item.weather[0].icon;

        const div = document.createElement('div');
        div.classList.add('hourly-card');

        div.innerHTML = `
            <p>${time}</p>
            <img src="https://openweathermap.org/img/wn/${icon}@2x.png">
            <p>${temp}°C</p>
        `;

        hourlyRow.appendChild(div);
    });
}

/* ================= AUTOCOMPLETE (ONLY NEW PART) ================= */

cityInput.addEventListener('input', async () => {
    const query = cityInput.value.trim();

    if (query.length < 2) {
        suggestionsBox.innerHTML = '';
        return;
    }

    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${APIkey}`;
    const response = await fetch(url);
    const cities = await response.json();

    suggestionsBox.innerHTML = '';

    cities.forEach(city => {
        const div = document.createElement('div');
        div.innerText = `${city.name}, ${city.country}`;

        div.addEventListener('click', () => {
            cityInput.value = city.name;
            suggestionsBox.innerHTML = '';
            checkweather();
        });

        suggestionsBox.appendChild(div);
    });
});
