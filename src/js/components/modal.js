const closeModalBtns = document.querySelectorAll("[data-modal-close]");
const pledgeModal = document.getElementById("pledge-modal");
const pledgeCompleteModal = document.getElementById("pledge-complete-modal");

function showPledgeModal() {
  pledgeModal.setAttribute("data-active", "");
}

function showPledgeCompleteModal() {
  pledgeCompleteModal.setAttribute("data-active", "");
}

function closeModal(e) {
  const modal = e.target.closest(".modal");
  modal.removeAttribute("data-active");
}

closeModalBtns.forEach((closeModalBtn) => {
  closeModalBtn.addEventListener("click", closeModal);
});

export { showPledgeModal, showPledgeCompleteModal };
