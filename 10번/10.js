function multiply(value) {
  if (typeof value === 'number') {
    const result = value * 2;
    return result;
  } else if (typeof value === 'string') {
    console.log('입력은 숫자만 허용됩니다.');
  } else {
    typeof value === 'undefined';
    // typeof value === ''; 이렇게 하면 될 줄 알았는데 아니었다..
    // 어차피 위에서 숫자로 걸러지고, 문자열로 걸러지기 때문에.
    // 숫자도 문자열도 아닌 것들을 걸러낼 undefined만 추가하면 됐다.
    console.log('올바르지 않은 입력입니다.');
  }
}

console.log(multiply(10)); // 20
console.log(multiply('십')); // 입력은 숫자만 허용됩니다.
console.log(multiply([10])); // 올바르지 않은 입력입니다.
console.log(multiply()); // 올바르지 않은 입력입니다.
