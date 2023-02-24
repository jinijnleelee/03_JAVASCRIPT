
// 정규 표ㅕㄴ식 객체 생성
   console.log("regEx1".text)



   
//메타문자 확인하기 

document.getElementById("check2").addEventListener("click", function() { 

// 결과 출력용 div
const div1 = document.getElementById("div1");

// div1.innerHTML = "";

//문자열 내에 a,b,c,d 중 하나라도 일치하는 문자가 있는지 검색 
const regFx1 = /[abcd]/;

div1.innerHTML += "/[abcd]/ , apple : " +  regEx1.test("apple") + "<hr>";
div1.innerHTML += "/[abcd]/ , apple : " +  regEx1.test("apple") + "<hr>";


//^(캐럿) : 문자열의 시작을 의미
const regEx2 = /^group/;
div1.innerHTML += "/[group]/ , group100 : " +  regEx2.test("group100") + "<hr>";
div1.innerHTML += "/[group]/ , 100group : " +  regEx2.test("100group") + "<hr>";

//^[abcd] : 문자열이 a,b,c,d 중 하나로 시작하는지 검색
const regEx3 = ?^[abcd]/;



//$(달러) : 문자열의끝을 의미
const regEx4 = /team$/ ; 
div1.innerHTML += "/team$ / , 


})


//이름 유효성 검사
document.getElementById("inputName").addEventListener("keyup",function () {

const regEx = /^[가-힣]{2,6}$/;

const result1 = document.getElementById("result1");


//요소.classLit : 요소가 가지고 있는 클래스를 배열로 반환
// 요ㅛ소 .classList.remove("클래스명") : 요소의 특정 클래스 제거
// 요ㅛ소 .classList.add("클래스명") : 요소의 특정 클래스 추가
// 요ㅛ소 .classList.toggle("클래스명") :클래스가 있으면 제거 없으면 추가 


if(regEx.test(this.value)) {
    result1.innerText = "유효한 형식입니다"

    result1.classList.add("confirm");
    result1.classList.remove("error");


}else{
    
result1.innerText = "잘못된 형식입니다"


result1.classList.add("error");
result1.classList.remove("confirm");


}


})