const submit = document.getElementById("button-submit").addEventListener("click", (e) => {
	e.preventDefault();

	const city = "alagoinhas";
	const apiKey = "62d845a9cba168e29142f2549cba80bd";
	const cityInput = document.getElementById("search-city").value;
	const cardDescription = document.getElementsByClassName("card-climate-show-content");

	// trade weather for forecast
	/*
        filtrar dados por dia e hora antes de exibir para o cliente
    */
	return fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&lang=pt_br&units=metric&appid=${apiKey}`,
	)
		.then((response) => response.json())
		.then((data) => {
			cardDescription[0].innerHTML = `
                        <div class="climate-show">
							<p class="title">${Math.trunc(data.main.temp)} °C</p>
                            <img class="climate-icon" src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="${data.weather[0].description}">

						</div>
                        <div class="description-climate">
							<div class="description-climate-text">
								<h2 class="sub-title">Sábado, 19:00</h2>
								<p class="sub-title">${data.weather[0].description}</p>
							</div>
							<div class="more-info-climate">
								<p>umidade: ${data.main.humidity}%</p>
								<p>Vento: a ${data.wind.speed} m/s</p>
							</div>
						</div>
                    `;
		})
		.catch((error) => console.error(error));
});
