let endseconds = new Date();
let d = h = m = s = 0;

m = 59 - endseconds.getMinutes();
s = 59 - endseconds.getSeconds();
let id = setInterval(seckill, 1000);

function seckill() {
    s--;
    if (s == -1) {
        s = 59;
        m--;
    }
    if (m == -1) {
        m = 59;
    }
    document.getElementById('d').innerHTML = '0天';
    document.getElementById('h').innerHTML = '0时';
    document.getElementById('m').innerHTML = m + '分';
    document.getElementById('s').innerHTML = s + '秒';
}