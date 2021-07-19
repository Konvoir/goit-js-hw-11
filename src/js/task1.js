const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');


const timer = {
    interval: null,
    isActive: false,

    clickOnStart () {
        if (this.isActive) {return;}
        this.isActive = true;
        startBtn.disabled = true;
        this.interval = setInterval(chengeBgColor, 1000, 1000);
    },

    clickOnStop () {
        clearInterval(this.interval);
        this.isActive = false;
        startBtn.disabled = false;
    }
 
};

startBtn.addEventListener('click', () => {timer.clickOnStart()});
stopBtn.addEventListener('click', () => {timer.clickOnStop()});

function chengeBgColor () { console.log(document.body.style.background = getRandomHexColor());}