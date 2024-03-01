function solution(n) {
    let pizzaslice = 7;
    let pizzacount = Math.floor(n / pizzaslice);
    
    if (n % pizzaslice !== 0) {
        pizzacount += 1;
    }
    return pizzacount;
}