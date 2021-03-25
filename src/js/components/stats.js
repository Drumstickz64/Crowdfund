import Store from "../Store";

const numOfBackersElem = document.getElementById("num-of-backers");

function displayNumOfBackers(numOfBackers) {
	numOfBackersElem.textContent = numOfBackers;
}

Store.subscribe("numOfBackers", displayNumOfBackers);