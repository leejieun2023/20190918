function solution(n, k) {
    // 10인분씩마다 먹으면 음료수 1개 서비스
    // 양꼬치 1인분 12,000원 / 음료수 1개 2,000원
    // n인분 양꼬치, k개의 음료수 = 얼마를 지불해야하는지?
    let gogi = n * 12000;
    let water = k * 2000;
    let free = Math.floor(n / 10);
    return gogi + water - (2000 * free);
}