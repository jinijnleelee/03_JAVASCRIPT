// 아이디 유효성 검사
document.getElementById("inputId").addEventListener("keyup", function() {

    
    const regEx = /^[a-z0-9]{5,}$/;

    const result3 = document.getElementById("result1");

    // 요소.classList : 요소가 가지고 있는 클래스를 배열로 반환
    // 요소.classList.remove("클래스명") : 요소의 특정 클래스 제거
    // 요소.classList.add("클래스명") : 요소의 특정 클래스 추가
    // 요소.classList.toggle("클래스명") : 클래스가 있으면 제거 없으면 추가

    if(regEx.test(this.value)) {
        result3.innerText = "유효한 형식 입니다."

        result3.classList.add("confirm1");
        result3.classList.remove("error");
        
    } else {
        result3.innerText = "잘못된 형식 입니다."
        result3.classList.add("error");
        result3.classList.remove("confirm1");
    }
})



// 이름 유효성 검사
document.getElementById("inputName").addEventListener("keyup", function() {

    // 한글 2글자 이상 6자 이하 문자열
    const regEx = /^[가-힣]{2,6}$/;

    const result3 = document.getElementById("result3");

    // 요소.classList : 요소가 가지고 있는 클래스를 배열로 반환
    // 요소.classList.remove("클래스명") : 요소의 특정 클래스 제거
    // 요소.classList.add("클래스명") : 요소의 특정 클래스 추가
    // 요소.classList.toggle("클래스명") : 클래스가 있으면 제거 없으면 추가

    if(regEx.test(this.value)) {
        result3.innerText = "유효한 형식 입니다."

        result3.classList.add("confirm3");
        result3.classList.remove("error");
        
    } else {
        result3.innerText = "잘못된 형식 입니다."
        result3.classList.add("error");
        result3.classList.remove("confirm3");
    }
})

// 휴대폰 유효성 검사
document.getElementById("inputPhone").addEventListener("keyup", function() {

    // 010으로 시작. 숫자만 입력
    const regEx = /^010\d/;

    const result4 = document.getElementById("result4");

    // 요소.classList : 요소가 가지고 있는 클래스를 배열로 반환
    // 요소.classList.remove("클래스명") : 요소의 특정 클래스 제거
    // 요소.classList.add("클래스명") : 요소의 특정 클래스 추가
    // 요소.classList.toggle("클래스명") : 클래스가 있으면 제거 없으면 추가

    if(regEx.test(this.value)) {
        result4.innerText = "유효한 형식 입니다."

        result4.classList.add("confirm4");
        result4.classList.remove("error");
        
    } else {
        result4.innerText = "잘못된 형식 입니다."
        result4.classList.add("error");
        result4.classList.remove("confirm4");
    }
})


// 주민번호 유효성 검사
document.getElementById("inputYear").addEventListener("keyup", function() {

    // 010으로 시작. 숫자만 입력
    const regEx = /^0-9/;

    const result5 = document.getElementById("result5");

    // 요소.classList : 요소가 가지고 있는 클래스를 배열로 반환
    // 요소.classList.remove("클래스명") : 요소의 특정 클래스 제거
    // 요소.classList.add("클래스명") : 요소의 특정 클래스 추가
    // 요소.classList.toggle("클래스명") : 클래스가 있으면 제거 없으면 추가

    if(regEx.test(this.value)) {
        result5.innerText = "유효한 형식 입니다."

        result5.classList.add("confirm5");
        result5.classList.remove("error");
        
    } else {
        result5.innerText = "잘못된 형식 입니다."
        result5.classList.add("error");
        result5.classList.remove("confirm5");
    }
})
document.getElementById("inputYear").addEventListener("keyup", function() {

    // 010으로 시작. 숫자만 입력
    const regEx = /^010\d/;

    const result5 = document.getElementById("result5");

    // 요소.classList : 요소가 가지고 있는 클래스를 배열로 반환
    // 요소.classList.remove("클래스명") : 요소의 특정 클래스 제거
    // 요소.classList.add("클래스명") : 요소의 특정 클래스 추가
    // 요소.classList.toggle("클래스명") : 클래스가 있으면 제거 없으면 추가

    if(regEx.test(this.value)) {
        result5.innerText = "유효한 형식 입니다."

        result5.classList.add("confirm5");
        result5.classList.remove("error");
        
    } else {
        result5.innerText = "잘못된 형식 입니다."
        result5.classList.add("error");
        result5.classList.remove("confirm5");
    }
})

