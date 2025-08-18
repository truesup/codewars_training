function periodIsLate(last, today, cycleLength) {
    const msPerDay = 1000 * 60 * 60 * 24;
    const daysPassed = (today - last) / msPerDay;
    return daysPassed > cycleLength;
}
​