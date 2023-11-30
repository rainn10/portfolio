//footer
document.addEventListener("DOMContentLoaded", function () {
    const currentYear = new Date().getFullYear();
    const copyrightYear = document.getElementById("cc");
    copyrightYear.textContent = `© Rain Aclao, ${currentYear}`;
});