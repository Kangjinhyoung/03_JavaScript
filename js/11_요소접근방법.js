/** class를 이용한 요소(DOM 객체) 접근 방법 */
function classTest() {
  /* 유사 배열이란?
    배열처럼 index, length를 가지고 있으나
    배열 전용 기능(메서드)를 제공하지 않음
  */

  // 클래스가 cls-test인 요소를 모두 얻어와
  // HTML Collection(유사 배열)형태로 얻어옴
  const divs = document.getElementsByClassName('cls-test');
  // 0부터 divs 길이 미만까지 반복
  for(let i = 0; i < divs.length; i++) { // i = 0, 1, 2
    // 요소.innerText = "값"; // 요소 내용으로 값 대입
    // 요소.innerText;        // 요소 내용 얻어오기
    console.log(divs[i].innerText); // 작성된 내용(색상)
    // i 번째 배경색을 변경
    divs[i].style.backgroundColor = divs[i].innerText;
  }
}
/** input에 입력된 숫자 모두 얻어와 합계 구하기 */
function classTest2() {
  /* input 요소에 입력된 값 얻어오는 방법 
     -> input요소.value

     HTML 요소에서 얻어온 값의 자료형은
     -> 모두 string(문자열)

     합계 구하는 방법
     -> let sum = 0; 선언 후 누적 

     HTML 문서에서 class 속성값이 일치하는 요소 모두 얻어오기
     -> document.getElementsByClassName("class속성값")
        -> HTMLCollection (유사배열) 형태로 반환
  */
  // 클래스가 'cls-test2'인 요소를 모두 얻어옴  
  const numbers = document.getElementsByClassName('cls-test2');
  let sum = 0;
  for(let i = 0; i < numbers.length; i++) {
    
    /* numbers[i]; == input 요소 하나 */

    // 읽어온 값을 숫자로 변환해 sum에 누적
    sum += Number(numbers[i].value);
  }
  alert(`합계 : ${sum}`);
}
/** 태그명으로 요소 접근하기 */
function tagNameTest() {
  /* document.getElementsByTagName("태그명") */
  const tagList = document.getElementsByTagName("li"); // -> 요소 4개짜리 배열 반환
  // i == 0, 1, 2, 3
  for(let i = 0; i < tagList.length; i++) {
    /* tagList[i].innerText : 작성된 내용 */

    // 글자색 변경
    tagList[i].style.color = tagList[i].innerText;
    // 테두리 변경
    tagList[i].style.border = `3px solid ${tagList[i].innerText}`;
  }
}
/** name으로 요소 접근하기(취미 선택) */
function nameTest() {
  /* document.getElementsByName("name 속성 값") 
     -> NodeList (유사 배열) 반환
  */
  // name 속성 값이 "hobby"인 요소를 모두 얻어와 저장
  const hobbyList = document.getElementsByName("hobby");
  
  let str = '';  // 체크된 input의 value를 누적
  let count = 0; // 체크된 input의 개수를 카운트
  // i == 0, 1, 2, 3, 4, 5 (길이는 6, 마지막 인덱스는 5 (길이 - 1))
  for(let i = 0; i < hobbyList.length; i++) {
    /* 요소.cheked -> checkbox, radio 타입 전용 속성
      요소.checked = true;  -> 해당 요소 체크
      요소.checked = false; -> 해당 요소 체크 해제
      요소.checked; -> 체크 여부 반환 ( 체크 0 -> true, 체크 X -> false)
    */
   // i 번째 input 요소가 체크 되어 있을 경우
   if(hobbyList[i].checked === true) {
    // console.log(hobbyList[i].value);
    str += `${hobbyList[i].value} `; // value 누적
    count++; // count 1 증가
   }
  } // for문 끝

    // 클래스가 name-div인 요소에 str, count 출력

    // document.getElementsByClassName("name-div");
    // -> 요소가 1개밖에 없어도 배열 형태로 반환

  // 요소가 1개 밖에 없음 == 0번 인덱스만 존재
  // -> 0번 인덱스만 별도 변수에 저장해서 사용

  const div = document.getElementsByClassName("name-div")[0];
  div.innerHTML = `${str}<br><br>선택된 취미 개수 : ${count}개 `;

}
/** CSS 선택자를 이용한 요소 접근 방법 */
function cssTest1() {
  // target-div 속성 값이 css-div인 요소 하나 선택
  const container = document.querySelector('[target-div = css-div]');

  container.style.width = '200px';
  container.style.height = '200px';
  container.style.border = '10px solid aqua';

  // target-div 속성 값이 css-div인 요소의
  // 자식 중 div 요소를 모두 선택해 얻어옴
  const divs = document.querySelectorAll('[target-div = css-div] > div');
  // i == 0,1
  for(let i = 0; i < divs.length; i++) {
    divs[i].style.height = '50%';
    divs[i].style.display = 'flex';
    divs[i].style.justifyContent = 'center';
    divs[i].style.alignItems = 'center';
  }
  // index 별로 배경색 따로 지정
  divs[0].style.backgroundColor = 'pink';
  divs[1].style.backgroundColor = 'skyblue';

  // divs 사용없이 'test1'이 작성된 요소를 선택해 fontSize = '30px'로 변경

  /* querySelector "[target-div = css-div] > div" 들 중에서 첫 번째 요소만 선택*/
  const test1 = document.querySelector('[target-div = css-div] > div')
  test1.style.fontSize = '30px';
} 