const upButton = document.querySelector('.up-button');

window.addEventListener('scroll', () => {
  console.log(window.scrollY);
  if (window.scrollY < 100) {
    upButton.style.display = 'none';
  } else {
    upButton.style.display = 'block';
  }
});

document.querySelector('.up-button').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});
