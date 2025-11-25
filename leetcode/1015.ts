function smallestRepunitDivByK(k: number): number {
    if (k % 2 === 0 || k % 5 === 0) {
        return -1;
    }

    let count = 0;
    let remainder = 0;

    for (let i = 0; i < k; i++) {
        count += 1;

        remainder = (remainder * 10 + 1) % k;

        if (remainder === 0) {
            return count;
        }
    }

    return -1
};
