function solution(money) {
    const ice = 5500;
    const cup = Math.floor(money / ice);
    const resultMoney = money % ice;
    return [cup, resultMoney];
}