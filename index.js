let interval;
const minutesSpan = document.querySelector('.minutes');
const secondsSpan = document.querySelector('.seconds');
const tensSpan = document.querySelector('.tens');
const startButton = document.querySelector('.btn--start');
const stopButton = document.querySelector('.btn--stop');
const resetButton = document.querySelector('.btn--reset');


const updateTime = () => {
    let mins = Number.parseInt(minutesSpan.textContent);
    let secs = Number.parseInt(secondsSpan.textContent);
    let tens = Number.parseInt(tensSpan.textContent) + 1;

    if (tens === 100) {
        tens = '00';
        secs += 1;
    } else if (tens < 10) {
        tens = `0${tens}`
    }

    if(secs === 60){
        secs = '00';
        mins += 1
    } else if (secs < 10) {
        secs = `0${secs}`
    }

    if(mins < 10){
        mins = `0${mins}`
    }

    tensSpan.textContent = tens;
    secondsSpan.textContent = secs;
    minutesSpan.textContent = mins;   
}


startButton.addEventListener('click', ()=> {
    clearInterval(interval);
    interval = setInterval(updateTime,10)
});

stopButton.addEventListener('click', () => {
    clearInterval(interval);
});

resetButton.addEventListener('click', () => {
    clearInterval(interval);
    minutesSpan.textContent = '00';
    secondsSpan.textContent = '00';
    tensSpan.textContent = '00';
})