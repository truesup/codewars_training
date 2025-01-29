function dup(arr) {
    return arr.map(s => {
        let newStr = '';
        let prevChar = '';
        for (let char of s) {
            if (char !== prevChar) {
                newStr += char;
                prevChar = char;
            }
        }
        return newStr;
    });
}