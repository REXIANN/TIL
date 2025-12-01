function minSubarray(nums: number[], p: number): number {
    const totalSum = nums.reduce((acc, num) => acc + num, 0);
    const targetRemainder = totalSum % p;

    if (targetRemainder === 0) {
        return 0;
    }

    const remainderMap: Map<number, number> = new Map();
    remainderMap.set(0, -1);

    let currentMod = 0;
    let minLength = nums.length;

    for (let i = 0; i < nums.length; i++) {
        currentMod = (currentMod + nums[i]) % p;

        // currentMod - requiredMod = targetRemainder
        const requiredMod = (currentMod - targetRemainder + p) % p;

        if (remainderMap.has(requiredMod)) {
            const prevIndex = remainderMap.get(requiredMod)!;
            const currentLength = i - prevIndex;

            minLength = Math.min(minLength, currentLength);
        }

        remainderMap.set(currentMod, i);
    }

    if (minLength === nums.length) {
        return -1;
    }

    return minLength;
};