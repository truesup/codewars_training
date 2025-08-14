function evil(n) {
    const onesCount = n.toString(2).split('1').length - 1;
    return onesCount % 2 === 0 ? "It's Evil!" : "It's Odious!";
}