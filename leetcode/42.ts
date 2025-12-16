function trap(height: number[]): number {
    const rightMaxArr = Array.from({ length: height.length }, () => 0);

    let rightMax = 0;
    for (let i = height.length - 1; i >= 0; i--) {
        const target = height[i];

        if (target > rightMax) {
            rightMax = target
        }

        rightMaxArr[i] = rightMax
    }

    let leftMax = 0;
    let answer = 0;

    for (let i = 0; i < height.length; i++) {
        const target = height[i]
        rightMax = rightMaxArr[i]

        if (target > leftMax) {
            leftMax = target;
            continue;
        }

        if (target < leftMax && target < rightMax) {
            answer += Math.min(leftMax - target, rightMax - target)
        }
    }

    return answer;
};