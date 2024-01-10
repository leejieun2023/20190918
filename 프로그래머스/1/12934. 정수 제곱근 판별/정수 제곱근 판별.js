function solution(n) {
    let a = Math.sqrt(n);
    if (Number.isInteger(a)) {
        return Math.pow(a+1, 2);
        } else {
            return -1
        }
}