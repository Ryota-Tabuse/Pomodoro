let TIME_MIN = 25;
let TIME_SEC = 00;

const ONE_MSEC = 1000;
// 1000ミリ秒ごとに、実行する。
TIMER = setInterval(() => {CountDown()}, ONE_MSEC );

const countDownTimer = document.getElementById('timer');

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
        clearInterval(TIMER);
    }
}
