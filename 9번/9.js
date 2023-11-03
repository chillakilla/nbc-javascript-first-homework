// 콘솔에 "안녕하세요."가 띄워지려면 HTML이 로딩된 후, 콘솔이 실행하게 만들어야한다.
// 그러므로 addEventListenerd의 'DOMContentLoaded' 사용해 한번 기다려주고 콘솔로 찍어준다.

document.addEventListener('DOMContentLoaded', function () {
  console.log('안녕하세요.');
});
