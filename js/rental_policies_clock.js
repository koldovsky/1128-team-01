const clockContainer = document.querySelector('.rental_policies__clock_timer');
const timerContainer = document.querySelector('.rental_policies__js_timer')
const timerTitle = document.querySelector('.rental_policies__title');
function updateClock() {
    clockContainer.innerText = new Date().toLocaleTimeString('uk')
}

function blinkTitle() {
    timerTitle.classList.toggle('rental_policies__js_title')
}
function blinkText() {
    timerContainer.classList.toggle('rental_policies__js_timer_color')
}


setInterval(blinkTitle, 1000);
setInterval(blinkText, 1000);
setInterval(updateClock, 1000);
