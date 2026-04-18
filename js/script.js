function getApi() {
	const city = "Alagoinhas";
	const apiKey = "62d845a9cba168e29142f2549cba80bd";
	const apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`;

	return fetch(apiUrl)
		.then((response) => response.json)
		.then((data) => console.log(data))
		.catch((error) => console.error(error));
}

getApi();
