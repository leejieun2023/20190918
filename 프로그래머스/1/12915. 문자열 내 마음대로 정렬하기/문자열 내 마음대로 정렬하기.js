function solution(strings, n) {
    let result = [];
    
    //for문을 사용하여 문자열을 순회
    for (let i=0; i<strings.length; i++) {
        strings[i] = strings[i][n] + strings[i];
        //ex) car = acar
    }
    
    strings.sort();
    
    for (let j=0; j<strings.length; j++) {
        strings[j] = strings[j].replace(strings[j][0], "");
        result.push(strings[j]);
    }
    return result;
}