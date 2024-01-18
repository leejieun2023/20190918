function solution(s) {
    let leng = s.length;
    
    if (leng % 2 === 0) {
        return s.substr(leng / 2 -1, 2)
    } else if (leng % 2 !== 0) {
        return s.substr(leng / 2, 1)
    }
}