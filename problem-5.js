function  waitingTime(waitingTimes  , serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
        return 'Invalid Input';
    }

    for (let i = 0; i < waitingTimes.length; i++) {
        if (typeof waitingTimes[i] !== "number") {
        return 'Invalid Input';
        }
    }

    const infectedCount = waitingTimes.length;

    if (serialNumber <= infectedCount) {
        return 0;
    }

    let totaltime = 0;
    for (let i = 0; i < waitingTimes.length; i++) {
    totaltime += waitingTimes[i];
    }
    const AvgTime = Math.round(totaltime / waitingTimes.length);
    const beforeNum = serialNumber - (waitingTimes.length + 1);
    if (beforeNum <= 0) {
    return 0;
    }
    const totalwaitingtime = beforeNum * AvgTime;

    return totalwaitingtime;
}


console.log(waitingTime([3, 5, 7, 11, 6], 10));
console.log(waitingTime([13, 2], 6));
console.log(waitingTime([13, 2, 6, 7, 10], 6));
console.log(waitingTime([6], 4));
console.log(waitingTime(7, 10));
console.log(waitingTime("[6,2]", 9));
console.log(waitingTime([7, 8, 3, 4, 5], "9"));
