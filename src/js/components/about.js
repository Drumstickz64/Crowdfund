import { showPledgeModal } from "./modal";
import { selectionPledgeRadios } from "./pledge-modal";

// this refers to the buttons that make the pledge modal
// appear with thier respective pledge selected
const selectRewardBtns = document.querySelectorAll(".btn[data-pledge-target]");


function showPledgeModalAndSelectPledge(e) {
	showPledgeModal();
	
	let targetSelectPledgeRadio;
	const targetPledgeSelector = e.target.dataset.pledgeTarget;
	selectionPledgeRadios.forEach(selectionPledgeRadio => {
		if (selectionPledgeRadio.matches(targetPledgeSelector)) {
			targetSelectPledgeRadio = selectionPledgeRadio;
		}
	});
	
	targetSelectPledgeRadio.scrollIntoView({ block: "center" });
	targetSelectPledgeRadio.click();
}

selectRewardBtns.forEach(selectRewardBtn => {
	selectRewardBtn.addEventListener("click", showPledgeModalAndSelectPledge);
});