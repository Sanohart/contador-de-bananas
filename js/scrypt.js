let count = 0;
let buttonSum = document.querySelector('#botao-soma');
let buttonSub = document.querySelector('#botao-sub');
buttonSum.addEventListener('click', function () {
  count++;
  document.querySelector('#result-text').innerHTML = count;
});
buttonSub.addEventListener('click', function () {
  count--;
  document.querySelector('#result-text').innerHTML = count;
});
