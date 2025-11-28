function numberOfSubstrings(s: string): number {
    const N = s.length;
    let totalCount = 0;

    const B = Math.floor(Math.sqrt(N))

    const zeros = [-1];
    for (let i = 0; i < N; i++) {
        if (s[i] === '0') {
            zeros.push(i)
        }
    }
    zeros.push(N);

    for (let i = 0; i < N; i++) {
        let count0 = 0; // 0의 개수
        let count1 = 0; // 1의 개수

        let j = i;

        while(j < N && count0 <= B) {
            if (s[j] === '0') {
                count0++;
            } else {
                count1++;
            }

            if (count1 >= count0 * count0) {
                totalCount++;
            }

            if (count0 > B) {
                break;
            }

            j++;
        }

        let k = 0;
        while(k < zeros.length && zeros[k] < i) {
            k++;
        }

        let m = B + 1;

        while(m * m < N) {
            const endZeroIndex = zeros[k + m - 1];

            if (k + m - 1 >= zeros.length - 1) {
                break;
            }

            const len = endZeroIndex - i + 1;

            count1 = len - m;

            if (count1 >= m * m) {
                const nextZeroIndex = zeros[k + m];
                const validSubstringCount = nextZeroIndex - endZeroIndex;
                totalCount += validSubstringCount;
            } else {
                break;
            }

            m += 1;
        }
    }

    return totalCount;
}
