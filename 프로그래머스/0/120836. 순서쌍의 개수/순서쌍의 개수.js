function solution(n) {
    let result = 0;
    for (let i=1; i<=Math.sqrt(n); i++) {
        if (n % i === 0) {
            let 약수 = n / i;
            if (i !== 약수) {
                result += 2;
            } else {
                result += 1;
            }
        }
    }
    return result;
}