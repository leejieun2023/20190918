function solution(array) {
    // array 배열의 각 원소에서 중앙값을 찾아야한다.
    // array 배열의 길이는 홀수이다.
    array.sort((a, b) => a - b);
    const middle = Math.floor(array.length / 2);
    return array[middle];
}