let TIME_MIN = 0;
let TIME_SEC = 10;
const ONE_MSEC = 1000;

const countDownTimer = document.getElementById('timer');
//初期表示
Notification.requestPermission();
countDownTimer.innerHTML = `${TIME_MIN.toString().padStart(2,'0')}：${TIME_SEC.toString().padStart(2,'0')}`;

// 1000ミリ秒ごとに、実行する。
let TIMER;
const startTimer = () => {
    TIMER = setInterval(() => {CountDown()}, ONE_MSEC );
}

const stopTimer = () => {
    clearInterval(TIMER);
}

const CountDown = () => {

    if(TIME_SEC === 00){
        TIME_MIN--;
        TIME_SEC = 59;
    } else {
        TIME_SEC--;
    }

    //画面を更新
    countDownTimer.innerHTML = `${TIME_MIN.toString().padStart(2,'0')}：${TIME_SEC.toString().padStart(2,'0')}`;

    // 停止条件
    if(TIME_MIN === 0 && TIME_SEC === 0 ) {
        // タイマー解除
        stopTimer();
        Notification
        .requestPermission()
        .then(() => {
            const notification = new Notification("Hello, world!");
        });
    }
}
