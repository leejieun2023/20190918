function solution(n)
{
   return String(n).split('').reduce((a, b) => a + Number(b), 0)
    //숫자를 문자열로 변환
    //원소 갈라서 배열 만들기
    //원소 다 더하기
    //문자를 숫자로 변환
    //reduce의 0은 제일 처음 누적된 값
    //a는 누적되고 있는 값, 출력값
    //b는 현재 순회중인 배열의 요소
}