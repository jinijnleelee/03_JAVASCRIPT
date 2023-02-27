// 아이디 유효성 검사
document.getElementById("inputId").addEventListener("keyup", function() {

    
    const regEx = /^[a-z0-9]{5,}$/;

    const result1 = document.getElementById("result1");


    if(regEx.test(this.value)) {
        result1.innerText = "사용가능."

        result1.classList.add("confirm1");
        result1.classList.remove("error");
        
    } else {
        result1.innerText = "불가능."
        result1.classList.add("error");
        result1.classList.remove("confirm1");
    }
})

// 비밀번호 유효성 검사
document.getElementById("inputPw").addEventListener("keyup", function() {

    
    // const regEx =

    // const result2 = document.getElementById("result2");


    if(regEx.test(this.value)) {
        result2.innerText = "사용가능."

        result2.classList.add("confirm2");
        result2.classList.remove("error");
        
    } else {
        result2.innerText = "불가능."
        result2.classList.add("error");
        result2.classList.remove("confirm2");
    }
})


// 이름 유효성 검사
document.getElementById("inputName").addEventListener("keyup", function() {

    // 한글 2글자 이상 6자 이하 문자열
    const regEx = /^[가-힣]{2,6}$/;

    const result3 = document.getElementById("result3");


    if(regEx.test(this.value)) {
        result3.innerText = "사용가능."

        result3.classList.add("confirm3");
        result3.classList.remove("error");
        
    } else {
        result3.innerText = "불가능."
        result3.classList.add("error");
        result3.classList.remove("confirm3");
    }
})

// 휴대폰 유효성 검사
document.getElementById("inputPhone").addEventListener("keyup", function() {

    // 010으로 시작. 숫자만 입력
    const regEx = /^010[0-9]{4,}[0-9]{4,}$/;

    const result4 = document.getElementById("result4");

   

    if(regEx.test(this.value)) {
        result4.innerText = "사용가능."

        result4.classList.add("confirm4");
        result4.classList.remove("error");
        
    } else {
        result4.innerText = "불가능"
        result4.classList.add("error");
        result4.classList.remove("confirm4");
    }
})


// 주민번호 유효성 검사
document.getElementById("inputYear").addEventListener("keyup", function() {

    
    const regEx = /^[0-9]{6,}([-? ?]?)[1-4]{2,}[0-9]{5,}$/;

    const result5 = document.getElementById("result5");


    if(regEx.test(this.value)) {
        result5.innerText = "사용가능."

        result5.classList.add("confirm5");
        result5.classList.remove("error");
        
    } else {
        result5.innerText = "불가능."
        result5.classList.add("error");
        result5.classList.remove("confirm5");
    }
})

// 이메일 유효성 검사
document.getElementById("inputEmail").addEventListener("keyup", function() {

    //이메일(@무조건 포함. 맨뒤는 .com으로 끝날것) 
    const regEx = /^[a-zA-Z0-9]{3,}@[a-z]{3,}(.com\b)$/;

    const result6 = document.getElementById("result6");


    if(regEx.test(this.value)) {
        result6.innerText = "사용가능."

        result6.classList.add("confirm6");
        result6.classList.remove("error");
        
    } else {
        result6.innerText = "불가능."
        result6.classList.add("error");
        result6.classList.remove("confirm6");
    }
})
