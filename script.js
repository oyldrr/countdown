const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const myForm = document.forms["form"]; 

function countdown()
{ 
    const sysdate = myForm["date"].valueAsNumber;
    const targetDate = new Date(sysdate);
    const currentDate = new Date();

    const timeLeft = targetDate - currentDate;

    const totalSeconds = timeLeft / 1000;
    const seconds = Math.floor(totalSeconds) % 60;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const days = Math.floor(totalSeconds / 3600 / 24);

    daysElement.innerHTML = days;
    hoursElement.innerHTML = formatTime(hours);
    minutesElement.innerHTML = formatTime(minutes);
    secondsElement.innerHTML = formatTime(seconds);
}

myForm.addEventListener("submit", function(e){
    e.preventDefault(); 
    setInterval(countdown, 1000)
})

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

;