function solution(n) {
    let str = String(n);
    let result = 0;
    for (let i=0; i<str.length; i++) {
        result += parseInt(str[i]);
    }
    return result;
}