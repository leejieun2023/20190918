function solution(numbers) {
    // number는 배열. 숫자가 몇 개씩 들어오는지 모름.
    // number의 각 원소에 2배를 곱한 원소를 가진 배열을 return
    const numbers2 = numbers.map((a) => a*2);
    return numbers2;
}