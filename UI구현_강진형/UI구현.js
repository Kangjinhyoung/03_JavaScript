const table1 = document.querySelectorAll('.table1');
const userWidth = document.querySelector('.userWidth');
const userHeight = document.querySelector('.userHeight');
const userFontSize = document.querySelector('.userFontSize');
const userColor = document.querySelector('.userColor');
const userText = document.querySelector('.userText');
const userBgColor = document.querySelector('.userBgColor');


const changeBtn = document.querySelector("#changeButton");
const resultContainer = document.querySelector('#result-container');

changeBtn.addEventListener('click', function(){
  resultContainer.style.width = userWidth.value + 'px';
})
changeBtn.addEventListener('click', function(){
  resultContainer.style.height = userHeight.value + 'px';
})
changeBtn.addEventListener('click', function(){
  resultContainer.style.fontSize = userFontSize.value + 'px';
})
changeBtn.addEventListener('click', function(){
  resultContainer.style.color = userColor.value;
})
changeBtn.addEventListener('click', function(){
  resultContainer.textContent = userText.value;
})
changeBtn.addEventListener('click', function(){
  resultContainer.style.backgroundColor = userBgColor.value;
})
changeBtn.addEventListener('click', function(){
  const userWeight = document.querySelector("input[name = weight-btn]:checked");
  resultContainer.style.fontWeight = userWeight.value;
})
changeBtn.addEventListener('click', function(){
  const userDirection = document.querySelector("input[name = direction-btn]:checked");
  resultContainer.style.justifyContent = userDirection.value;
})
changeBtn.addEventListener('click', function(){
  const userVertical = document.querySelector("input[name = vertical-btn]:checked");
  resultContainer.style.alignItems = userVertical.value;
})
