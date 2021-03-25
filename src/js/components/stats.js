import Store from "../Store";
import { formatPayment } from "../utils";

const numOfBackersElem = document.getElementById("num-of-backers");
const amountPledgedElem = document.getElementById("amount-pledged");

function displayNumOfBackers(numOfBackers) {
	numOfBackersElem.textContent = numOfBackers;
}

function displayAmountDonated(amountPledged) {
	const formatedPledge = formatPayment(amountPledged);
	amountPledgedElem.textContent = formatedPledge;
}

Store.subscribe("amountPledged", displayAmountDonated);
Store.subscribe("numOfBackers", displayNumOfBackers);