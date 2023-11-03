document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#heading').innerHTML = '제목입니다.';
  console.log(document.querySelector('#heading').innerHTML);
});
// innerHTML을 통해 h1부분에 내용을 집어넣는 것.
// innerHTML이 미리 실행되는 것을 방지하기 위해, addEventListener 'DOMContentLoaded'.
