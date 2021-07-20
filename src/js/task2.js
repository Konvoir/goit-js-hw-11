import Swal from 'sweetalert2';

const refs = {
    inputDate: document.getElementById('date-selector'),
    startBtn: document.querySelector('button[data-start]'),
    dataDays: document.querySelector('span[data-days]'),
    dataHours: document.querySelector('span[data-hours]'),
    dataMinutes: document.querySelector('span[data-minutes]'),
    dataSeconds: document.querySelector('span[data-seconds]'),
};

refs.startBtn.classList.add('timer-btn');
refs.startBtn.disabled = true;
refs.inputDate.addEventListener('change' onInputDate);

function onInputDate (event) {
    const inputData = new Date(this.value).getTime();
    const isCurrentTimer = (inputData > Date.now());

    if  (!isCurrentTimer) {
        return Swal.fire('Please choose a date in the future');
    } else {
        refs.startBtn.disabled = false;
    }
}

const timeRemaining = endDate => {
    let diff = Date.parse(endDate) - Date.now();
    let secondsData = diff / 1000;
    let minutesData = diff / 60000;
    let seconds = Math.floor(secondsData % 60);
    let minutes = Math.floor(minutesData % 60);

    return {diff, seconds, minutes};
};

const startTimer = () => {
    if (!paused) {
        paused = true;
        
    }
}