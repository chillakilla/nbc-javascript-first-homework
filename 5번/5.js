const number = document.querySelectorAll('.number');

for (let i = 0; i < number.length; i++) {
  let divNumber = parseInt(number[i].textContent, 10);
  let newNumber = divNumber + 10;
  number[i].textContent = newNumber;
}

// 먼저 HTML의 숫자를 변경해야하니까 클래스를 지정해서 불러와서 변수로 선언.
// 이때, querySelectorAll을 한 이유는 다 똑같은 숫자 형태이며,
// 같은 클래스이고 효율이 좋기 때문.

// for 문으로 현재 바꿔줄 요소의 개수만큼 돌려줌.(number.length)
// parseInt를 사용해 텍스트 내용을 정수로 바꾼 것을 divNumber에 변수로 저장.
// 그리고 newNumber에는 위에서 처리된 divNumber에 10을 더한 걸 변수로 저장.
//  textContent를 newNumber로 업데이트해줌.

// parseInt()
// 이 함수는 문자열 인자를 파싱하여,
// 특정 진수(수의 진법 체계에서 기준이 되는 값)의 정수를 반환.
// (출처 mdn)
// 알고 있으면 알고리듬 풀때 도움 될 듯.

// 이건 조언받고 더 줄인 코드
// for (let i = 0; i < number.length; i++) {
//   let newNumber = +number[i].textContent + 10;
//   number[i].textContent = newNumber;
// }
