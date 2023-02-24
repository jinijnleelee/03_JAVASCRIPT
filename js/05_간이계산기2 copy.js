//전역변수 
const num1 = document.getElementById("num1");// 요소추가 0, 값,속성추가X
const num2 = document.getElementById("num2");
const result = document.getElementById("result");


function calc(op) {
// op에는  +,-,/,*,%  중 하나가 전달됨 
const n1 = Number(num1.value);
const n2 = Number(num1.Value);


switch(op){
    case '+': result.innerText = n1 + n2;break;
    case '-': result.innerText = n1 - n2;break;
    case '*': result.innerText = n1 * n2;break;
    case '/': result.innerText = n1 / n2;break;
    case '%': result.innerText = n1 % n2;break;

}

}