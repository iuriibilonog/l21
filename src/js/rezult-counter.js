let number = document.querySelector('.rezult-counter'),
  numberTop = number.getBoundingClientRect().top,
  start = +number.innerHTML,
  end = +number.dataset.max;

window.addEventListener('scroll', function onScroll() {
  if (window.pageYOffset > numberTop - window.innerHeight / 2) {
    this.removeEventListener('scroll', onScroll);
    const interval = setInterval(function () {
      number.innerHTML = ++start;
      if (start == end) {
        clearInterval(interval);
      }
    }, 5);
  }
});