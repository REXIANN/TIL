function twoSum(nums: number[], target: number): number[] {
    const numMap = new Map()

    for (let i = 0; i < nums.length; i++) {
        const rest = target - nums[i];

        if (numMap.get(rest) != null) {
            return [numMap.get(rest), i]
        } else {
            numMap.set(nums[i], i)
        }
    }
};