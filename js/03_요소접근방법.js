//아이디로 접근하기
function fnTest1() {
    // id가 "did인 요소를 얻어와 상수형 변수 div1에 저장"
    const div1 = document.getElementById("div1")



    // //2. 접근한 요소의/ 배경색을 얻어와 //  변수에 저장 
    const bgcolor = div1.style.backgroundColor;



//빨간 <==> 노란색
  if (bgcolor == 'red'){
 div1.style.backgroundColor = "yellow";
   } else{
    div1.style.backgroundColor = "red";
   }

//   class 변경하기

}
function fnTest2() {
    // 요소 여러개를 한번에 접근하는 경우 배열형태로 반환됨
    const arr = document.getElementsByClassName("div2");


console.log(arr[i]);

//arr[i].style.backgroundColor = "green";

for(let i =0 ; i< arr.length; i++){
    arr[i].innerText = i + "번째 요소입니다."
    arr[i].style.backgroundColor = "green";
}
}

// 태그밍으로 접근하기
function fnText3() {
    // 문서 내에 존재하는 모든 li요소를 얻어와 배열 형식으로 반환
    const arr = document.getElementsByTagName("li");

    for(let i =  0; i < arr.length; i++){

        arr[i].style.backgroundColor = "rgb(100, " + arr[i].innerText + ",130)"
    }
}


//  아이디 중복확인할대 쓰면 좋음

//input 태그값(value)
function fnTest4() {
    // input 요소 접근하기 
    const input = document.getElementById("inputTest");

    // input 관련 태그에 작성된 값을 나타내는 속성 == value
    //input 요소에 작성된 값을 얻어와 alert 출력 
    alert(input.value);

    //input 요소에 ""(빈문자열) 대입 == 값을 삭제 
    input.value =  "";
}

// name 속성으로 접근하기
function fnTest5() {

    //  name 속성값이 "hobby"인 요소를 모두 얻어와 배열 형식으로 반환
    const hobby = document.getElementsByName("hobby");

    console.log(hobby);
    let str = "";//체크인 체크박스의 값을 누적할 변수 선언
    let count = 0 ;// 체크 갯수 카운트 

    for(let i =0; i < hobby.length; i ++){

        // .checked 속성
        //해당 요소가 체크되어있다면 true / 아니면 false
        //checkbox, radio 전용 속성 

        if(hobby[i].checked) { //체크된 경우
            str += hobby[i].value + "";
            count++;

        }
    }


    const result5 = document.getElementById("result5");

    if(str != "") { // 채크가 된 경우
        result5.innerText = str;
        result5.innerHTML += "<br><br>선택된 갯수: " + count;




    }else{
        result5.innerText = "선택된 취미가 없습니다";
    }
}


    // CSS 선택자로 접근하기
    function fnTest6(){
        document.querySelector("#cssTest").style.border = "3px solid green";
        document.querySelector("#cssTest > div").style.backgroundColor = "gold";
        const arr = document.querySelectorAll("#cssTest > div");

        for(let i = 0 ; i < arr.length; i ++){
            arr[i].style.fontSize = "30px";
        }



    
    
    }


    // 입력된 값을 읽어들여 채팅창에 출력
    function readValue(){

        //채팅이랑 관련된 요소 모두 얻어오기
        const bg = document.getElementById("chatting-bg");
        const input = document.querySelector("#chattingInput");

        //채팅이 정상적으로 입력된 경우에만 출력
        if(input.value.trim().length > 0 ) {
             //문자열.trim() : 좌우 공백을 제거(중간 공백 제거X)
             //채팅창에 입력된 값으로 채팅 추가 

             bg.innerHTML +=" <p><span>" + input.value + "</span></p>";


             //스크롤을 제일 밑으로 내리기 
             // 요소.scrollTop : 요소 내부 현재 스크롤의 위치 
             // 요소.scrollTop  = 위치 : 스크롤을 특성 위치로 이동
             // 요소.scrollHeight : 스크롤의 전체 높이 

            bg.scrollTop = bg.scrollHeight;




        }else{
            alert("채팅 내용을 입력해주세요 ");
        }

        //입력한 내용 삭제
        input.value = "" ; 
    
    }

    //엔터키가 입력되어을때
    function inputEnter(){
        //키보드 입력과정
        //  - 키누름 --> keydown 이벤트 -> input 태그에 입력
        // -> keypress -> (손을 떼면) keyup

        //keydown : 모든 키가 눌렸을때 
        //keypress : 영어/숫자/특수문자/띄어쓰기가 눌러지고있을때
        //-> 꾹 누르고 있을 경우 연속으로 함수가 호출되는 문제 발생
        // ->  keyup : 1회만 인식

        if(window.event.key == "Enter") {
            readValue();
        }

    }

