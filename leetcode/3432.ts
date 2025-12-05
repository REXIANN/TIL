function countPartitions(nums: number[]): number {
  const sum = nums.reduce((acc, cur) => acc + cur, 0);

  let answer = 0;
  let leftSum = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    leftSum += nums[i];
    const rightSum = sum - leftSum;

    if (Math.abs(rightSum - leftSum) % 2 === 0) {
      answer += 1;
    }
  }

  return answer;
}
