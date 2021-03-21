const nav = document.querySelector(".nav");
const navToggle = document.querySelector(".nav .hamburger");
const navMenu = document.querySelector(navToggle.dataset.target);
const closeModalBtns = document.querySelectorAll("[data-modal-close]");
const selectionPledgeCards = document.querySelectorAll(".pledge-card.is-selection");
const selectPledgeRadios = document.querySelectorAll(".radio[name=\"pledge-tier\"]");
// this refers to the buttons that make the pledge modal
// appear with thier respective pledge selected
const selectRewardBtns = document.querySelectorAll(".btn[data-pledge-target]");
const backProjectBtn = document.getElementById("back-project-btn");
const pledgeModal = document.getElementById("pledge-modal");


function toggleNavMenu() {
	navToggle.toggleAttribute("data-active");
	navMenu.toggleAttribute("data-hidden");
}

function showPledgeModal() {
	pledgeModal.setAttribute("data-active", "");
}

function closeModal(e) {
	const modal = e.target.closest(".modal");
	modal.removeAttribute("data-active");
}

function selectPledge(e) {
	selectionPledgeCards.forEach(selectionPledgeCard => {
		selectionPledgeCard.removeAttribute("data-selected");
	});
	
	const currentCard = e.target.closest(".pledge-card");
	currentCard.setAttribute("data-selected", "");
}

function showPledgeModalAndSelectPledge(e) {
	showPledgeModal();
	
	let targetSelectPledgeRadio;
	const targetPledgeSelector = e.target.dataset.pledgeTarget;
	selectPledgeRadios.forEach(selectPledgeRadio => {
		if (selectPledgeRadio.matches(targetPledgeSelector)) {
			targetSelectPledgeRadio = selectPledgeRadio;
		}
	});
	
	targetSelectPledgeRadio.click();
}


navToggle.addEventListener("click", toggleNavMenu);

backProjectBtn.addEventListener("click", showPledgeModal);

closeModalBtns.forEach(closeModalBtn => {
	closeModalBtn.addEventListener("click", closeModal);
});

selectPledgeRadios.forEach(selectPledgeRadio => {
	selectPledgeRadio.addEventListener("click", selectPledge);
});

selectRewardBtns.forEach(selectRewardBtn => {
	selectRewardBtn.addEventListener("click", showPledgeModalAndSelectPledge);
});