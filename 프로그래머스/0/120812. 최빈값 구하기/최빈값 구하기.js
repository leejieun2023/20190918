function solution(array) {
    array.sort((a, b) => a - b);
    
    let a = 0;
    let 최빈값 = -1;
    let 몇번반복한최빈값 = 0; // 최빈값이 될 때 몇 번 반복했는지
    let 등장수 = 0; // 현재 똑같은 숫자가 몇 번 나왔는지
    let 이전숫자 = -1;
    let 중복된최빈값 = 0;
    while (a < array.length) {
        if (이전숫자 !== array[a]) {
            등장수 = 1;
        } else {
            등장수 += 1;
        }
        
        if (등장수 === 몇번반복한최빈값) {
            if (최빈값 !== array[a]) {
             중복된최빈값 = true;   
            }
        }
        
        if (등장수 > 몇번반복한최빈값) {
            최빈값 = array[a];
            몇번반복한최빈값 = 등장수;
            중복된최빈값 = false;
        }
        이전숫자 = array[a];
        a += 1;
    }
    if (중복된최빈값) return -1;
    return 최빈값;
}