import "./components/nav";
import { showPledgeModal } from "./components/modal";
import { selectPledgeRadios } from "./components/pledge-modal";

// this refers to the buttons that make the pledge modal
// appear with thier respective pledge selected
const selectRewardBtns = document.querySelectorAll(".btn[data-pledge-target]");
const backProjectBtn = document.getElementById("back-project-btn");


function showPledgeModalAndSelectPledge(e) {
	showPledgeModal();
	
	let targetSelectPledgeRadio;
	const targetPledgeSelector = e.target.dataset.pledgeTarget;
	selectPledgeRadios.forEach(selectPledgeRadio => {
		if (selectPledgeRadio.matches(targetPledgeSelector)) {
			targetSelectPledgeRadio = selectPledgeRadio;
		}
	});
	
	targetSelectPledgeRadio.scrollIntoView({ block: "center" });
	targetSelectPledgeRadio.click();
}

backProjectBtn.addEventListener("click", showPledgeModal);

selectRewardBtns.forEach(selectRewardBtn => {
	selectRewardBtn.addEventListener("click", showPledgeModalAndSelectPledge);
});