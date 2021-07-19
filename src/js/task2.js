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