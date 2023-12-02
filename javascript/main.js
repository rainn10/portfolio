/* Footer */
const currentYear = new Date().getFullYear();
const copyrightYear = document.getElementById("cc");
copyrightYear.textContent = `© Rain Aclao, ${currentYear}`;

/* Alert Button + Hover */
const btnAlert = document.getElementById("btn-alert");
btnAlert.addEventListener("click", function () {
    alert("Congratulations! You've officially joined the 'I Clicked the Button' club. Well, the 'Do Not Click' warning was just a suggestion, right?");
});

const defaultLabel = '- - - - - DO NOT CLICK - - - - -';
const labels = {
    default: '- - - - - DO NOT CLICK - - - - -',
    hover: '-_- DONT YOU DARE -_-'
};

btnAlert.innerText = labels.default;
btnAlert.addEventListener("mouseover", function () {
    btnAlert.innerText = labels.hover;
});
btnAlert.addEventListener("mouseleave", function () {
    btnAlert.innerText = labels.default;
});

/* Incrementing Button */
let count = 0;
const btnCounter = document.getElementById('btn-counter');
const txtCounter = document.getElementById('txt-counter');

const btnReset = document.getElementById('btn-reset');
const timerCountdown = document.getElementById('timer-countdown');

let timerSeconds = 10;
let timerId;
let timerRunning = false;

function handleTimer() {
    if (timerSeconds <= 0) {
        stopTimer();
    } else {
        timerSeconds--;
        timerCountdown.textContent = timerSeconds;
    }
}

/* Timer Start */
function startTimer() {
    timerId = setInterval(handleTimer, 1000);
}

/* Timer Stop */
function stopTimer() {
    clearInterval(timerId);
    timerRunning = false;
    btnCounter.disabled = true;

    alert(`Timer reached 0. You clicked ${count} times!`);

    btnCounter.disabled = false;
    btnCounter.disabled = true;
}

/* Timer Reset */
function resetTimer() {
    clearInterval(timerId);
    timerSeconds = 10;
    timerRunning = false;
    timerCountdown.textContent = timerSeconds;
}

/* If - Else */
btnCounter.addEventListener('click', function () {
    count++;
    txtCounter.textContent = `Number: ${count}`;

    if (count % 2 === 0) {
        btnCounter.classList.add('even');
        btnCounter.classList.remove('odd');
    } else {
        btnCounter.classList.add('odd');
        btnCounter.classList.remove('even');
    }

    /* timer */
    if (!timerRunning) {
        timerRunning = true;
        startTimer();
    }
});

/* Reset Button */
btnReset.addEventListener('click', function () {
    resetTimer();
    count = 0;
    txtCounter.textContent = `Number: ${count}`;
    btnCounter.classList.remove('even', 'odd');
    btnCounter.disabled = false;
});

/* ol List */
const olList = document.getElementById('numbers');

for (let i = 1; i <= 100; i++) {
    const listItem = document.createElement('li');

    listItem.textContent = i % 2 === 0 ? 'EVEN' : 'ODD';

    olList.appendChild(listItem);
}