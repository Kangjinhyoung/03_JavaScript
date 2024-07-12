const display         = document.querySelector("#display");
const startBtn        = document.querySelector("#startBtn");
const recordBtn       = document.querySelector("#recordBtn");
const resetBtn        = document.querySelector("#resetBtn");
const recordContainer = document.querySelector("#recordContainer");

// [0] : 분 / [1] : 초 / [2] : 1/100초
const timeList        = document.querySelectorAll("#display > span");

let count = 0; // 1/100초마다 1씩 증가한 값을 저장할 변수

// START 버튼을 눌렀을 때 반복되는 setInterval()을 저장할 용도의 변수
let currentInterval; 

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
/* START 버튼 클릭 시 10ms 마다 count1 증가 + 화면 시간 변경 */
startBtn.addEventListener("click", () => {

  // 이전 start 버튼이 클릭된적이 있을 경우
  // -> 버튼에 작성된 내용이 "PAUSE"인 경우
  if (startBtn.innerText === "PAUSE") {
    clearInterval(currentInterval); // 이전 interval 멈춤
    startBtn.innerText = "START";

    recordBtn.disabled = true; // 비활성화해라

    // 일시 정지 상태가 유지 되어야 하기 때문에 
    // 이벤트 핸들러를 여기서 종료 시켜 
    // 아래 setInterval()을 수행 못하게 함
    return;
  }
  
  currentInterval = setInterval(() => {
    count++; // count 1 증가
    output(); // 시계 화면 출력 함수 호출
  }, 10);
  // START 버튼 클릭 시 버튼의 내용을 PAUSE로 변경

  startBtn.innerText = "PAUSE";

  // RECORD 버튼의 비활성화 -> 활성화로 변경
  recordBtn.disabled = false;
  
});
/* 시계 화면 출력 함수 */
function output() {
  // 화면에 출력될 시간을 저장할 변수
  let minute = Math.floor ( count / 100 / 60 ); // 분
  let second = Math.floor ( count / 100 % 60 ); // 초
  let ms     = count % 100; // 0.00

  // 0을 붙이는 함수를 호출
  minute = attachZero(minute);
  second = attachZero(second);
  ms = attachZero(ms);

  // 화면 출력

  // minute에 저장된 값과 화면에 출력된 "분"이 다른 경우
  // -> 1분 증가
  if(minute != timeList[0].innerText) {
    timeList[0].innerText = minute; 
  }
  // second에 저장된 값과 화면에 출력된 "초"가 다른 경우
  // -> 1초가 증가
  if(second != timeList[1].innerText) {
    timeList[1].innerText = second; 
  } 
    timeList[2].innerText = ms; 
}
/** 전달 받은 수가 10미만인 경우 앞에 "0"을 붙여서 반환 */
function attachZero(num) {
  if(num < 10) return "0" + num;

  return num;
}

/* RESET 버튼이 클릭 되었을 때
   - 0.01초 마다 반복되는 setInterval()을 멈춤
   - 화면에 출력된 시간을 00:00.00으로 초기화
*/
resetBtn.addEventListener("click", () => {
  /* [window.]clearInterval( setInterval()이 저장된 변수 )
     - 전달 인자에 작성된 setInterval()을 멈춤 (지움)
  */
clearInterval(currentInterval);

// 화면에 출력된 시간을 00:00.00 으로 초기화
count = 0;
output();
startBtn.innerText = "START";

// 기록된 시간들 모두 삭제
recordContainer.innerHTML = '';
recordBtn.disabled = true; // 비활성화해라
});

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
/* RECORD 버튼 클릭 시 
   현재 출력되는 시간을 얻어와 li태그로 만들어
   #recordContainer의 첫 번째 자식으로 추가
*/
recordBtn.addEventListener("click", () => {

  /* li태그 생성 */
  const li = document.createElement("li");

  // 내용으로 현재 출력 시간 대입
  li.innerText = display.innerText;

  // #recordContainer의 첫 번째 자식으로 추가
  recordContainer.prepend(li);
});