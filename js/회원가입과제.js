const pw = document.getElementById("pw");
const pw2 = document.getElementById("pw2");

const id = document.getElementById("id");
const btnId = document.getElementById("btnId");
const spanPw= document.getElementById("spanPw");
const spanName= document.getElementById("spanName");
const inputName = document.getElementById("inputName");
const signUp = document.getElementById("signUp");



id.addEventListener("change", function(){


    const regEx = /^[a-z]{1}[a-zA-Z0-9/_/-/]{6,13}$/;

    const id = document.getElementById("id");

    if(regEx.test(this.value)) {
        
        id.style.backgroundColor="springgreen";
        id.style.color="black";
       
        
       
        
    } else {
       
        id.style.backgroundColor="red";
        id.style.color="white";
       
        
       
    }
})


pw.addEventListener("keyup" , function() {

    if(pw.value===pw2.value) {
       console.log(pw.value);
       spanPw.innerText = "비밀번호 일치";
       spanPw.style.color = "green";

    }else{

        spanPw.innerText = "비밀번호 불일치";
        spanPw.style.color = "red";
    }
})




inputName.addEventListener("change", function() {

    // 한글 2글자 이상 5자 이하 문자열
    const regEx = /^[가-힣]{2,5}$/;



    if(regEx.test(this.value)) {
        spanName.innerText = "정상입력";
        spanName.style.color = "green";

    
        
    } else {
        spanName.innerText = "한글만 입력하세요";
        spanName.style.color = "red";
    }
})



signUp.addEventListener("")





