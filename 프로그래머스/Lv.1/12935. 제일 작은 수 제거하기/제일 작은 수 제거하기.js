function solution(arr) {
    if (arr.length <= 1) {
        return [-1];
    }
    
    const min = Math.min(...arr);
    const index = arr.indexOf(min);
    
    arr.splice(index, 1);
    
    return arr;
}