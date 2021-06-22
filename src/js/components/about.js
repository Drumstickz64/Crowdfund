import { showPledgeModal } from "./modal";
import { selectionPledgeRadios } from "./pledge-modal";

// this refers to the buttons that make the pledge modal
// appear with thier respective pledge selected
const selectRewardBtns = document.querySelectorAll(".btn[data-pledge-target]");

function showPledgeModalAndSelectPledge(e) {
  showPledgeModal();

  let targetSelectionPledgeRadio;
  const targetPledgeSelector = e.target.dataset.pledgeTarget;
  selectionPledgeRadios.forEach((selectionPledgeRadio) => {
    if (selectionPledgeRadio.matches(targetPledgeSelector)) {
      targetSelectionPledgeRadio = selectionPledgeRadio;
    }
  });

  targetSelectionPledgeRadio.scrollIntoView({ block: "center" });
  targetSelectionPledgeRadio.click();
}

selectRewardBtns.forEach((selectRewardBtn) => {
  selectRewardBtn.addEventListener("click", showPledgeModalAndSelectPledge);
});
