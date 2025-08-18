function switcher(x) {
    return x
        .map(numStr => {
            let n = Number(numStr);
            if (n >= 1 && n <= 26) {
                return String.fromCharCode(122 - n + 1);
            } else if (n === 27) {
                return '!';
            } else if (n === 28) {
                return '?';
            } else if (n === 29) {
                return ' ';
            }
        })
        .join('');
}
​