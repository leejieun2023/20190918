function solution(num1, num2) {
    var answer = 0;
    var a = 0;
    a = num1 / num2;
    answer = Math.floor(a * 1000);
    return answer;
}