//전역변수 
const num1 = document.getElementById("num1");// 요소추가 0, 값,속성추가X
const num2 = document.getElementById("num2");
const result = document.getElementById("result");


function plus() {
    //함수가 호출 되었을때 내부 코드가 해석되면서 수행.
    const n1 = Number(num1.value);
    const n2 = Number(num1.Value);

    result.innerText = n1 + n2;


}

function minus(){
    result.innerText = Number(num1,value) - Number(num1,value);

}