function solution(money) {
    
    let count = Math.floor(money / 5500);
    let minimoeny = money % 5500;
    
    return [count, minimoeny];
}