function solution(str1, str2) {
    let result = 0;
    if (str1.includes(str2)) {
        result = 1;
    } else {
        result = 2;
    }
    return result;
}