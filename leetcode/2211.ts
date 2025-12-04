function countCollisions(directions: string): number {
    let LL = 0;
    let RR = directions.length - 1;

    while(LL < directions.length && directions[LL] === 'L') {
        LL += 1;
    }

    while(RR >= 0 && directions[RR] === 'R') {
        RR -= 1;
    }

    if (LL > RR) {
        return 0;
    }

    let collisions = RR - LL + 1;
    
    for (let i = LL; i < RR + 1; i++) {
        if (directions[i] === 'S') {
            collisions -= 1;
        }
    }

    return collisions;
};