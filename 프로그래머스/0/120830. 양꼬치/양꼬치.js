function solution(n, k) {
    // 양꼬치 12000원 / 음료수 2000원 / 10인분당 음료수 1병 서비스
    let 양꼬치 = 12000 * n;
    let 음료수 = 2000 * k;
    let 서비스 = Math.floor(n / 10);
    return 총가격 = 양꼬치 + 음료수 - (2000 * 서비스);
}