import { showPledgeModal } from "./modal";

const backProjectBtn = document.getElementById("back-project-btn");
const bookmarkBtn = document.getElementById("bookmark-btn");
const bookmarkIcon = document.getElementById("bookmark-icon");

function toggleBookmark() {
  bookmarkBtn.toggleAttribute("data-bookmarked");
}

backProjectBtn.addEventListener("click", showPledgeModal);
bookmarkBtn.addEventListener("click", toggleBookmark);
