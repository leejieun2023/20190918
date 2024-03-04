function solution(n) {
    let pizzacount = Math.floor(n / 7);
    if (n % 7 !== 0) {
        pizzacount += 1
    }
    return pizzacount;
}