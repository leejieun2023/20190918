function solution(numer1, denom1, numer2, denom2) {
    const denom = denom1 * denom2;
    const numer = (numer1 * denom2) + (numer2 * denom1);
    
    let minNumber;
    
    if (numer < denom) {
        minNumber = numer;
    } else {
        minNumber = denom;
    }
    // minNumber에 작은 숫자가 들어있음
    
    while (true) {
        if (numer % minNumber === 0) {
            if (denom % minNumber === 0) {
                return [numer/minNumber ,denom/minNumber];
            }
        }
        minNumber = minNumber - 1;
    }
    
}