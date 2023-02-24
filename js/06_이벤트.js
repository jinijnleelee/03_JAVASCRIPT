//인라인 이벤트 모델 확인하기
function fnTest2(btn) {
btn.style.color = "white";
btn.style.backgraoundColor = "black";
btn.style.coueor = "pointer";

}
//고전 이벤트 모양확인
document.getElementById("btn1").onclick = function() {
    alert("버튼 등록됨");
    //고전,표준 이벤트 모델 정상
    //-이벤트 제거가 가능함

    //요소의 속성 중 on 이벤트명 속성에 함수대신 null을 대입하여
    //이벤트 삭제(뱐스에 값을 새로 대입하여 덜어쓰기하는 원리)
    document.getElementById("btn1").onclick = null;



}
document.getElementById("btn1").onmouseover = function() {
    //마우스가 요소 위로 올라왔을ㄸ
    document.getElementById("btn1").style.backgroundColor = 'red';


}


document.getElementById("btn1").onmouseout = function() {
    //마우스가 요소 밖으로 나갔을때 
    document.getElementById("btn1").style.backgroundColor = 'yellow';


}

// 고전 이벤트 모델 안됨
// -> 한 요소에 동일한 이벤트 리스너에 대한
// 다수의 이벤트 핸들러를 작성할수 없다
// (마지막으로 대입된 이벤트 핸들러만 적용)
//-> 해결 방법 : 표준 이벤트 모델을 사용한다. 

//표준 이벤트 모델
const btn2 = document.getElementById("btn2");

// addEventListnerer("이벤트명", 함수);

btn2.addEventListener("click", function() {
    //이벤트 핸들러 내부에 작성된 this == 이벤트가 발생한 요소
    console.log(this);
    this.style.backgroundColor = "pink";
    this.style.border = "3px solid red";
    this.style.display = "black";
    this.style.padding = "10px"


})

// 고전이벤트 모양의 단점 보완한 것 확인해보기

btn2.addEventListener("click", function() {
   
    
    this.style.fontSize = "20px";
    this.style.color = "red";
    this.style.fontWeight = "bold";
    this.style.padding = "10px"


})


//배경색이 입력한 값으로 변하는 박스

document.getElementById("input1").addEventListener("keyup", function () {
    //박스 요소 선택 
    const div1 = document.getElementById("div1");

    div1.style.backgroundColor = this.value;
    


})














