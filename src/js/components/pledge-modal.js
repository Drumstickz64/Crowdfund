const selectionPledgeCards = document.querySelectorAll(".pledge-card.is-selection");
const selectionPledgeRadios = document.querySelectorAll(".radio[name=\"pledge-tier\"]");


function selectionPledge(e) {
	selectionPledgeCards.forEach(selectionPledgeCard => {
		selectionPledgeCard.removeAttribute("data-selected");
	});
	
	const currentCard = e.target.closest(".pledge-card");
	currentCard.setAttribute("data-selected", "");
}


selectionPledgeRadios.forEach(selectionPledgeRadio => {
	selectionPledgeRadio.addEventListener("click", selectionPledge);
});

export {
	selectionPledgeRadios,
};