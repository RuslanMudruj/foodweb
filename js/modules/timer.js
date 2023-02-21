function timer(id,deadLine){
    
  

    function getTimeRemaining(endTime) {
        let days = '0',
            hours = '0',
            minutes = '0',
            seconds = '0';
        const t = new Date(endTime) - new Date();
        if (t > 0) {
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
                hours = Math.floor((t / (1000 * 60 * 60)) % 24),
                minutes = Math.floor((t / (1000 * 60)) % 60),
                seconds = Math.floor((t / 1000) % 60);
            // console.log(`Days : ${days}, hours: ${hours}, minutes: ${minutes}, seconds: ${seconds}`)
        } else {
            const timer = document.querySelector('.promotion__timer');
            const text = document.createElement('span');
            text.textContent = "Discount end";
            text.classList.add('title');
            timer.append(text);
        }

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };

    }

    function setClock(selector, endtime) {

        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'), //timerBlocks[0].firstElementChild,
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(updateClock, 1000);
        updateClock();

        function updateClock() {
            const remainTime = getTimeRemaining(endtime);
            days.textContent = remainTime.days < 10 ? '0' + remainTime.days : remainTime.days;
            hours.textContent = remainTime.hours < 10 ? '0' + remainTime.hours : remainTime.hours;
            minutes.textContent = remainTime.minutes < 10 ? '0' + remainTime.minutes : remainTime.minutes;
            seconds.textContent = remainTime.seconds < 10 ? '0' + remainTime.seconds : remainTime.seconds;
            if (remainTime.total <= 0) {
                clearInterval(timeInterval)
            }
        }
    }

    setClock(id, deadLine);
}

export default timer;