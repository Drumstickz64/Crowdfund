import Store from "../Store";
import { formatPayment } from "../utils";

const numOfBackersElem = document.getElementById("num-of-backers");
const amountPledgedElem = document.getElementById("amount-pledged");
const pledgeProgressElem = document.getElementById("pledge-progress");

function displayNumOfBackers(numOfBackers) {
  numOfBackersElem.textContent = numOfBackers;
}

function updatePledgeProgress(newValue) {
  pledgeProgressElem.setAttribute("value", newValue.toString());
}

function displayAmountDonated(amountPledged) {
  const formatedPledge = formatPayment(amountPledged);
  amountPledgedElem.textContent = formatedPledge;

  updatePledgeProgress(amountPledged);
}

Store.subscribe("amountPledged", displayAmountDonated);
Store.subscribe("numOfBackers", displayNumOfBackers);
