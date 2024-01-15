function solution(phone_number) {
    let leng = phone_number.length;
    let answer = '';
    
    for (let i=0; i<leng-4; i++) {
        answer += '*';
    }
    let 나머지 = phone_number.substring(leng-4, leng);
    
    return answer + 나머지;
}