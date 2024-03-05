function solution(num_list) {
    let 짝수 = 0;
    let 홀수 = 0;
    for (let i=0; i<num_list.length; i++) {
        if (num_list[i] % 2 === 0) {
            짝수 += 1;
        } else if (num_list[i] % 2 !== 0) {
            홀수 += 1;
        }
    }
    return [짝수, 홀수]
}