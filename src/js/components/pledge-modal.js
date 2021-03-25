import { showPledgeCompleteModal } from "./modal";
import Store from "../Store";


const selectionPledgeCards = document.querySelectorAll(".pledge-card.is-selection");
const selectionPledgeRadios = document.querySelectorAll(".radio[name=\"pledge-tier\"]");
const confirmPledgeBtns = document.querySelectorAll(".pledge-card-footer .btn");


function selectPledge(e) {
	selectionPledgeCards.forEach(selectionPledgeCard => {
		selectionPledgeCard.removeAttribute("data-selected");
	});
	
	const currentPledgeCard = e.target.closest(".pledge-card");
	currentPledgeCard.setAttribute("data-selected", "");
}

function confirmPledge(e) {
	const currentPledgeCard = e.target.closest(".pledge-card");
	const inputElem = currentPledgeCard.querySelector(".pledge-card-input input");
	
	// if inputElem exists (this wasn't the no reward pledge)
	// then take pledge value and add it to the current amountPledged
	if (inputElem) {
		let pledgeValue = Number(inputElem.value);
		
		// payment is simply rounded down. this would not be the case in a real app
		pledgeValue = Math.floor(pledgeValue);
		
		if (pledgeValue < 0) pledgeValue = 0;
		
		Store.updateState("amountPledged", oldValue => oldValue + pledgeValue);
	}
	
	Store.updateState("numOfBackers", oldValue => oldValue + 1);
	
	showPledgeCompleteModal();
}


selectionPledgeRadios.forEach(selectionPledgeRadio => {
	selectionPledgeRadio.addEventListener("click", selectPledge);
});

confirmPledgeBtns.forEach(confirmPledgeBtn => {
	confirmPledgeBtn.addEventListener("click", confirmPledge);
});


export {
	selectionPledgeRadios,
};