function solution(x) {
    let a = String(x).split('');
    let sum = 0;
    for (let i=0; i<a.length; i++) {
        sum += Number(a[i]);
    }
    if (x % sum === 0) {
        return true;
    } else {
        return false;
    }
}