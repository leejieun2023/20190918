function solution(price, money, count) {
    //price:이용료 
    //money:내가 가진 돈
    //count:이용 횟수
    const total = count * price * (count + 1) / 2;
    const result = total - money;
    
    if (result > 0) {
        return result;
    } else {
        return 0;
    }
}