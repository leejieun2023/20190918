function solution(chicken) {
    // 치킨 1마리 주문 시, 쿠폰 1장
    // 쿠폰 10장을 모으면 치킨 1마리 / 근데 서비스 치킨에도 쿠폰 1장 줌.
    // 시켜먹은 치킨의 수 chicken
    // 받을 수 있는 최대 서비스 치킨의 수
    let coupon = chicken;
    let free = 0;
    
    while (coupon >= 10) {
        let newfree = Math.floor(coupon / 10);
        free += newfree;
        coupon = coupon % 10 + newfree;
    }
    
    return free;
}