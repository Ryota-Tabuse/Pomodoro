let timeMin = 25;
let timeSec = 0;
const ONE_MSEC = 1000;
const reloadTimer = () => {
    countDownTimer.innerHTML = `${timeMin.toString().padStart(2,'0')}：${timeSec.toString().padStart(2,'0')}`;
}

let isStarted = false;

const countDownTimer = document.getElementById('timer');
//初期表示
reloadTimer();

// 1000ミリ秒ごとに、実行する。
let TIMER;
const startTimer = () => {
    if(!isStarted) {
        TIMER = setInterval(() => {CountDown()}, ONE_MSEC );
        isStarted = true;
    }
}

const stopTimer = () => {
    clearInterval(TIMER);
    isStarted = false;
}

const resetTimer = () => {
    clearInterval(TIMER);
    isStarted = false;
    timeMin = 25;
    timeSec = 0;
    reloadTimer();
}

const CountDown = () => {

    if(timeSec === 00){
        timeMin--;
        timeSec = 59;
    } else {
        timeSec--;
    }

    //画面を更新
    reloadTimer();

    // 停止条件
    if(timeMin === 0 && timeSec === 0 ) {
        // タイマー解除
        stopTimer();
    }
}

