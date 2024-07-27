const showRegistrationBtn = document.getElementById("showRegistrationBtn");
const registrationDialog = document.getElementById("registrationDialog");
const closeDialogBtn = document.getElementById("closeDialogBtn");

showRegistrationBtn.addEventListener("click", () => {
  registrationDialog.showModal();
});

closeDialogBtn.addEventListener("click", () => {
  registrationDialog.close();
});

window.onload = function () {
  document.getElementById("myDialog").showModal();
};

window.onload = function () {
  document.getElementById("popupDialog").showModal();
};
function openNewPage() {
  window.open("https://www.example.com", "_blank");
}
