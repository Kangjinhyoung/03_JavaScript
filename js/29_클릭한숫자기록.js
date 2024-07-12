const numbers = document.querySelectorAll(".number");
const result = document.querySelector("#result");

for(let item of numbers){
  item.addEventListener("click", e => {

    if(result.textContent.length == 10){
      alert("10글자 까지만 입력 가능");
      return;
    } 

    result.textContent += e.target.textContent;
  }); 
}

/* 초기화 버튼 */
document.querySelector("#resetBtn").addEventListener("click", () => {
  result.textContent = "";
});