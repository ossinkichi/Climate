const city = "alagoinhas";

async function getApi() {
	const apiKey = "62d845a9cba168e29142f2549cba80bd";
	const apiUrl = `https://api.openweathermap.org/data/1.0/direct?q=${city}&appid=${apiKey}`;

	return await fetch(apiUrl)
		.then((response) => response.json)
		.then((data) => console.log(data))
		.catch((error) => console.error(error));
}
