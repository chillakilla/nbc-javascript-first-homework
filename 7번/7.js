document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('img').setAttribute('alt', '개발자');
});
// setAttributte 는 지정된 요소의 속성 값을 설정할 수 있음.
// 속성이 이미 있으면 그 값은 업데이트 됨.
// 그러므로 HTML 페이지가 loading이 끝난 후, img 의 alt 속성에 '개발자'라는 값을 집어넣음.
