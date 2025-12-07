function countOdds(low: number, high: number): number {
    const answer = Math.round((high - low) / 2)

    if (high % 2 === 1 && low % 2 === 1) {
        return answer + 1;
    }
    
    return answer;
};