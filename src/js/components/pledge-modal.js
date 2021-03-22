const selectionPledgeCards = document.querySelectorAll(".pledge-card.is-selection");
const selectPledgeRadios = document.querySelectorAll(".radio[name=\"pledge-tier\"]");


function selectPledge(e) {
	selectionPledgeCards.forEach(selectionPledgeCard => {
		selectionPledgeCard.removeAttribute("data-selected");
	});
	
	const currentCard = e.target.closest(".pledge-card");
	currentCard.setAttribute("data-selected", "");
}


selectPledgeRadios.forEach(selectPledgeRadio => {
	selectPledgeRadio.addEventListener("click", selectPledge);
});

export {
	selectPledgeRadios,
};