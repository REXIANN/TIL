const MOD = 1000000007;

function specialTriplets(nums: number[]): number {
    const leftMap = new Map();
    const rightMap = new Map();

    for (const num of nums) {
        rightMap.set(num, (rightMap.get(num) || 0) + 1);
    }

    let answer = 0;

    for (let i = 0; i < nums.length; i++) {
        const j = nums[i]
        
        rightMap.set(j, rightMap.get(j) - 1)

        const jDouble = j * 2;

        const leftCount = leftMap.get(jDouble) || 0;
        const rightCount = rightMap.get(jDouble) || 0;

        if (leftCount > 0 && rightCount > 0) {
            answer = (answer + leftCount * rightCount) % MOD;
        }

        leftMap.set(j, (leftMap.get(j) || 0) + 1)
    }

    return answer;
};