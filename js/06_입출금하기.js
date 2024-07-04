/* 전역 변수 ( JS 전체에서 공용으로 사용할 변수) */
// 잔액이 출력되는 span 요소
const output = document.getElementById ( "output" );
// 금액이 입력되는 input 요소
const amount = document.getElementById ( "amount" );
// 잔액 기록 변수 ( 초기값 10000)
let balance = 10000;
// 비밀번호 저장 변수 ( 초기 비밀번호 1234 )
let password = '1234'; // ( 비밀번호 변경 기능 추가해보셈 )

// -------------------------------------------------------------------
// 함수 내부에 작성되지 않은 코드
// -> HTML 페이지 로딩 시 자동으로 해석되어 수행된다
output.innerText = balance;
// 아이디가 amount인 input요소에 작성된 값을 삭제
amount.value = ''; // 빈칸을 대입해서 삭제하는 효과

function test() {
  // prompt 연습
  
  // prompt ( "내용" )
  // - alert() 처럼 알림창이 브라우저에 열리면서
  //   추가적으로 문자열 입력칸 + 확인 + 취소 버튼이 구성된 형태

  // - 확인 클릭 : 입력한 내용 반환
  // - 취소 클릭 : null 반환
  const pw = prompt ( "비밀번호를 입력하세요" );
  console.log ( "password : ", pw );

  if ( pw === null ) { // 취소를 누른 경우
    alert ( "비밀번호 입력 취소 됨" );
    return;
  }
  // pw : 입력 받은 값
  // password : 전역 변수 ( '1234' )
  if ( pw !== password ) { // 입력된 비밀번호가 password와 같이 않다면
    alert ( "비밀번호 불일치" );
    return;
  }
  // 입력한 비밀번호가 password와 일치한 경우
  alert ( "출금 완료~" );
}
/** 입금 */
function deposit() {
  // 입력된 금액을 읽어와 숫자로 변환
  const value = Number( amount.value );
  // 전역 변수 balance(잔액)에 누적
  balance += value; // balance = balance + value;
  output.innerText = balance;
  amount.value = '';
}
/** 출금 */
/* function withdrawal() {
  const pw = prompt( "비밀번호를 입력하세요. " )
  console.log( "password : ", pw );
  if(pw === null ) {
    
    alert( "비밀번호가 일치하지 않습니다." );
    return;
  }
  if( pw !== password ) { 
    
    alert( "비밀번호가 일치하지 않습니다" );
    return;
  }
  const value = Number(amount.value)
  if( value > balance ) {
    alert( "출금 금액이 잔액보다 클 수 없습니다.");
    return;
  }
  balance = balance - value;
  output.innerText = balance;
  amount.value = '';

  if( value < balance ) {
    alert( `${ value }원이 출금 되었습니다. 남은 잔액 : ${ balance }원` );
  }
} */
/** 출금 */
function withdrawal() {
  const pw = prompt( "비밀번호를 입력하세요" );
  // 취소
  if( pw === null ) {
    alert( "비밀번호 입력 취소됨" );
    return;
  }
  // 입력 받은 비밀번호가 password와 불일치
  if( pw !== password) {
    alert( "비밀번호가 일치하지 않습니다." );
    return;
  }
  const value = Number( amount.value );
  // 입력된 금액이 잔액보다 큰 경우
  if ( value > balance ) {
    alert( "출금 금액이 잔액보다 클 수 없습니다" );
    return;
  }
  balance -= value; 
  output.innerText = balance;
  amount.value = '';
  alert(`${ value } 원이 출금 되었습니다. 남은 잔액 : ${ balance }원`)
}

