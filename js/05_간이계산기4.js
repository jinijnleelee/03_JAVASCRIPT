//전역변수 
const num1 = document.getElementById("num1");// 요소추가 0, 값,속성추가X
const num2 = document.getElementById("num2");
const result = document.getElementById("result");


function calc(btn) {
// op에는  +,-,/,*,%  중 하나가 전달됨 

console.log(btn);
const n1 = Number(num1.value);
const n2 = Number(num1.Value);

const op = btn.innerText; //클릭된 버튼에 작성된 내용을 얻어옴
                            // +,-,/,*,% 


//eval() (*코드형식의 문자열)
//-> 매개변수의 문자열을 js 코들 해석/수정하는 함수
//->속도가 느림 + 보안 이슈로 인해 사용 지양(사용하지마세요..제발)

// result.innerText = eval(n1 + op + n2);

// new Function() 사용

result.innerText = new Function("return " + n1 + op + n2)();
// switch(op){
//     case '+': result.innerText = n1 + n2;break;
//     case '-': result.innerText = n1 - n2;break;
//     case '*': result.innerText = n1 * n2;break;
//     case '/': result.innerText = n1 / n2;break;
//     case '%': result.innerText = n1 % n2;break;

// }

}