document.addEventListener('DOMContentLoaded', function () {
  // HTML이 Loading 되기 전에 이벤트가 실행되는 것을 막기 위해.
  function clickHandler() {
    document.querySelector('.modal').classList.toggle('show');
  }

  clickHandler();
  // 중복되는 ('click', function(){document.querySelector('.modal').classList.toggle('show');})
  // 함수화 시켜서 코드가 더 효율적이고 재사용 가능하게 만듦.

  document.querySelector('.modal-btn').addEventListener('click', clickHandler);
  document.querySelector('.cancel-btn').addEventListener('click', clickHandler);
  // prompt창 버튼, 취소 버튼을 통해 클릭이라는 이벤트를 수행, 모달 창을 켜거나 닫는다.

  document.querySelector('.submit-btn').addEventListener('click', function () {
    let input = document.querySelector('.input').value;

    alert(input);
    // 입력 버튼을 통해 클릭이라는 이벤트를 수행, input영역에 들어간 value값에 따라 alert을 띄운다.
  });
});
