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

    if (targetDate < currentDate)
    {
        daysElement.innerHTML = '0';
        hoursElement.innerHTML = '0';
        minutesElement.innerHTML = '0';
        secondsElement.innerHTML = '0';
        document.getElementById("alert").innerHTML = "PLEASE SELECT FUTURE DATE!";
    }
    else {
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
        document.getElementById("alert").innerHTML = "";
    }
}

myForm.addEventListener("submit", function(e){
    e.preventDefault(); 
    setInterval(countdown, 1000)
})

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}