"use strict";
function getDogImage() {
	fetch(`https://dog.ceo/api/breeds/image/random/3`)
		.then((response) => response.json())
		.then((responseJson) => displayResults(responseJson))
		.catch((error) =>
			console.log(error, alert("Something went wrong. Try again later."))
		);
}

function renderResults(results) {
	let message = results.message;
	return `<img src="${message}" class="results-img">`;
}

function displayResults(responseJson) {
	let array = responseJson.message.map((results) => renderResults(results));
	let newResults = array.join("");
	$(".results").html(newResults);
	$(".results").removeClass("hidden");
}
function watchForm() {
	$("form").submit((event) => {
		event.preventDefault();
		getDogImage();
	});
}
$(function () {
	console.log("App loaded! Waiting for submit!");
	watchForm();
});
