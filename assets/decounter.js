function startTime() {
    const deadline = new Date('March 14, 2022 00:00:00')
    const today = new Date();
    const period = deadline.getTime() - today.getTime()
    let d = Math.floor(period / 3600 / 24 / 1000);
    let rest = period - d * 3600 * 24 * 1000;
    let h = Math.floor(rest / 3600 / 1000);
    let rest1 = rest - h * 3600 * 1000;
    let m = Math.floor(rest1 / 60 / 1000);
    let rest2 = rest1 - m * 60 * 1000;
    let s = Math.floor(rest2 / 1000);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('days_span').innerHTML = d;
    document.getElementById('hours_span').innerHTML= h;
    document.getElementById('minute_span').innerHTML = m;
    document.getElementById('second_span').innerHTML = s;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) i = "0" + i;
    return i;
}
