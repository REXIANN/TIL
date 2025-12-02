function longestPalindrome(s: string): string {
    if (s.length === 1) {
        return s
    }

    const T = '#' + s.split('').join('#') + '#';

    const P = Array.from({ length: T.length }, () => 0);


    let center = 0;
    let right = 0;

    for (let i = 0; i < T.length; i++) {
        let iMirror = 2 * center - i;

        if (right > i) {
            P[i] = Math.min(right - i, P[iMirror])
        } else {
            P[i] = 0;
        }

        while (
            i - 1 - P[i] >= 0 &&
            i + 1 + P[i] < P.length &&
            T[i - 1 - P[i]] === T[i + 1 + P[i]]
        ) {
            P[i] += 1;
        }

        if (P[i] + i > right) {
            right = P[i] + i;
            center = i;
        }
    }

    let maxLength = 0;
    let centerIndex = 0;

    for (let i = 0; i < P.length; i++) {
        if (P[i] > maxLength) {
            maxLength = P[i];
            centerIndex = i;
        }
    }

    const startIndex = (centerIndex - maxLength) / 2;

    const answer = s.slice(startIndex, startIndex + maxLength)
    return answer;
};