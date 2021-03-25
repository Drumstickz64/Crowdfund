import { showPledgeCompleteModal } from "./modal";
import Store from "../Store";


const selectionPledgeCards = document.querySelectorAll(".pledge-card.is-selection");
const selectionPledgeRadios = document.querySelectorAll(".radio[name=\"pledge-tier\"]");
const confirmPledgeBtns = document.querySelectorAll(".pledge-card-footer .btn");


function selectPledge(e) {
	selectionPledgeCards.forEach(selectionPledgeCard => {
		selectionPledgeCard.removeAttribute("data-selected");
	});
	
	const currentCard = e.target.closest(".pledge-card");
	currentCard.setAttribute("data-selected", "");
}

function confirmPledge() {
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