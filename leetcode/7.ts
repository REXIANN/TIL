function reverse(x: number): number {
    const isNegative = x < 0;
    let s = '';
    const xString = Math.abs(x).toString();
    const len = xString.length;

    for (let i = len - 1; i >= 0; i--) {
        s = s.concat(xString[i])
    }

    if (isNegative) {
        if (-1 * Number(BigInt(s)) < -1 * Math.pow(2, 31)) {
            return 0
        }
        return -1 * Number(BigInt(s))
    }

    if (Number(BigInt(s)) > Math.pow(2, 31) - 1) {
        return 0
    }
    return Number(BigInt(s))
};