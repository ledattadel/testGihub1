(function(){
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    const newYears ='1 Jan 2021';
    function countdown(){
        const newYearsDate = new Date(newYears);
        const currentDate = new Date();

        const seconds = (newYearsDate-currentDate)/1000;
        const days = Math.floor(seconds/3600/24)
        const hours = Math.floor(seconds/3600)%24;
        const minutes = Math.floor(seconds/60)%60;
        const totalSeconds = Math.floor(seconds)%60
        daysEl.textContent = days;
        hoursEl.textContent = hours;
        minutesEl.textContent = minutes;
        secondsEl.textContent = totalSeconds;
    }
    countdown();
    setInterval(countdown,1000)
})()

