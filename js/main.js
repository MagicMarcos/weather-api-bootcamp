// Enable your user to enter a city + country and return the temperature in Fahrenheit

document.querySelector('button').addEventListener('click', getFetch);

const input = document.querySelector('input');
let country;
let state;
function getFetch() {
	let city = input.value;
	let url = '';
	if (country === 'US') {
		url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=APIKEY`;
	} else {
		url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=APIKEY`;
	}
	fetch(url)
		.then(res => res.json())
		.then(data => showWeather(data))
		.catch(err => console.log(`error ${err}`));
}

function showWeather(data) {
	console.log(data);
	console.log(
		data.name,
		data.weather[0].description,
		`${((data.main.temp - 273.15) * 9) / 5 + 32}`.slice(0, 5),
		`${((data.main.feels_like - 273.15) * 9) / 5 + 32}`.slice(0, 5)
	);
}

// (data.main.temp − 273.15) × 9/5 + 32
var country_select = document.getElementById('country');
country_select.addEventListener('change', countryVal);

function countryVal(event) {
	var selected_value = this.value;
	var selected_text = this.options[this.selectedIndex].text;
	if (selected_value === 'US') {
		document.getElementById('country-state').disabled = false;
	} else {
		document.getElementById('country-state').disabled = true;
	}
	console.log(selected_value);
	console.log(selected_text);
	country = selected_value;
	console.log(country);
}

var state_select = document.getElementById('country-state');
state_select.addEventListener('change', stateVal);

function stateVal(event) {
	var selected_value = this.value;
	var selected_text = this.options[this.selectedIndex].text;
	console.log(selected_value);
	console.log(selected_text);
	state = selected_value;

	console.log(state);
}
