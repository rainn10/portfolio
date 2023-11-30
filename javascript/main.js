/*footer*/
const currentYear = new Date().getFullYear();
const copyrightYear = document.getElementById("cc");
copyrightYear.textContent = `© Rain Aclao, ${currentYear}`;

const alertButton = document.getElementById("btn-alert");

alertButton.addEventListener("click", function () {
    alert("Hello world!");
});