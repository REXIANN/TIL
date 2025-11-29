function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const m = nums1.length;
    const n = nums2.length;

    const medianIndex = Math.floor((m + n) / 2);
    let medianValue = 0;

    let arr = [];
    let i1 = 0;
    let i2 = 0;

    while (arr.length <= medianIndex) {
        const val1 = nums1[i1];
        const val2 = nums2[i2];

        if (i1 === m) {
            arr.push(val2);
            i2 += 1;
            continue;
        }

        if (i2 === n) {
            arr.push(val1);
            i1 += 1;
            continue;
        }

        if (val1 === val2) {
            arr.push(val1);
            arr.push(val2);

            i1 += 1;
            i2 += 1;
        } else if (val1 > val2) {
            arr.push(val2);
            i2 += 1;
        } else {
            arr.push(val1);
            i1 += 1;
        }
    }

    let answer = arr[medianIndex]

    if (((m + n) % 2) === 0) {
        answer = (arr[medianIndex] + arr[medianIndex - 1]) / 2
    }

    return answer;
};