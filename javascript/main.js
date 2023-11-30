/*footer*/
const currentYear = new Date().getFullYear();
const copyrightYear = document.getElementById("cc");
copyrightYear.textContent = `© Rain Aclao, ${currentYear}`;

const alertButton = document.getElementById("btn-alert");

// Set the default button label
const defaultLabel = 'Do Not Click!!!';

// Set the new button label for hover
const hoverLabel = 'New Button Label';

// Set the default label initially
alertButton.innerText = defaultLabel;

// Change the button label on mouseover
alertButton.addEventListener("mouseover", function () {
    alertButton.innerText = hoverLabel;
});

// Revert the button label on mouseleave
alertButton.addEventListener("mouseleave", function () {
    alertButton.innerText = defaultLabel;
});

// Click event listener
alertButton.addEventListener("click", function () {
    alert("you are stubborn");
});