function lengthOfLongestSubstring(s: string): number {
    let maxLength = 0;
    let head = 0;
    const charSet = new Set();

    for (let tail = 0; tail < s.length; tail++) {
        while (charSet.has(s[tail])) {
            charSet.delete(s[head]);
            head += 1;
        }

        charSet.add(s[tail]);

        maxLength = Math.max(maxLength, tail - head + 1);
    }

    return maxLength;
};