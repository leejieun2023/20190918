function solution(age) {
    let alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    let arrayalphabets = String(age).split("").map(Number);
    let result = "";
    
    for (let i=0; i<arrayalphabets.length; i++) {
        result += alphabets[arrayalphabets[i]];
    }
    return result;
}