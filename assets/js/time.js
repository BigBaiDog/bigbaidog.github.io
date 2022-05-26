function showRuntime(date, elementId) {
    let createTime = new Date(date);
    let today = new Date();
    let diffTime = today.getTime() - createTime.getTime();
    let diffYears = diffTime / 1000 / 60 / 60 / 24 / 365;
    diffYears = Math.floor(diffYears);
    let diffDays = diffTime / 1000 / 60 / 60 / 24 - (diffYears * 365);
    diffDays = Math.floor(diffDays);
    if (String(diffDays).length == 1) {
        diffDays = "0" + diffDays;
    }
    let diffHours = diffTime / 1000 / 60 / 60 - (diffYears * 365 * 24) - (diffDays * 24);
    diffHours = Math.floor(diffHours);
    if (String(diffHours).length == 1) {
        diffHours = "0" + diffHours;
    }
    let diffMinutes = diffTime / 1000 / 60 - (diffYears * 365 * 24 * 60) - (diffDays * 24 * 60) - (diffHours * 60);
    diffMinutes = Math.floor(diffMinutes);
    if (String(diffMinutes).length == 1) {
        diffMinutes = "0" + diffMinutes;
    }
    let diffSeconds = diffTime / 1000 - (diffYears * 365 * 24 * 60 * 60) - (diffDays * 24 * 60 * 60) - (diffHours * 60 * 60) - (diffMinutes * 60);
    diffSeconds = Math.floor(diffSeconds);
    if (String(diffSeconds).length == 1) {
        diffSeconds = "0" + diffSeconds;
    }
    document.getElementById(elementId).innerHTML = diffYears + "年" + diffDays + "日" + diffHours + "小时" + diffMinutes + "分钟" + diffSeconds + "秒";
}
setInterval("showRuntime('02/11/2020 20:02:02', 'runtime')", 1000);