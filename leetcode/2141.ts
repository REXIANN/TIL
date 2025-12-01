function maxRunTime(n: number, batteries: number[]): number {
    const sumBatteryPower = batteries.reduce((sum, power) => sum + power, 0);

    let left = 0;

    let right = Math.floor(sumBatteryPower / n);

    let maxTime = 0;

    const canRun = (T) => {

        let totalAvailableEnergy = 0;

        for (const batteryPower of batteries) {
            totalAvailableEnergy += Math.min(batteryPower, T);
        }

        return totalAvailableEnergy >= n * T;
    };

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);

        if (canRun(mid)) {
            maxTime = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return maxTime;
};