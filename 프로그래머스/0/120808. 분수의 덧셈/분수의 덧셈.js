function solution(numer1, denom1, numer2, denom2) {
    const denom = denom1 * denom2; // 분모 구하기
    const numer = (numer1 * denom2) + (numer2 * denom1); // 분자 구하기
    // -> 이렇게 해야 분자분모를 통분할 수 있음
    
    let minNumber;
    
    if (numer < denom) {
        minNumber = numer;
    } else {
        minNumber = denom;
    }
    // minNumber에 작은 숫자가 들어있음 -> 최대공약수를 찾아야함
    
    while (true) {
        if (numer % minNumber === 0) {
            if (denom % minNumber === 0) {
                return [numer/minNumber ,denom/minNumber];
            }
        }
        minNumber = minNumber - 1; // 만약 최대공약수가 아닐 때, 1을 뺌
    }
    
}