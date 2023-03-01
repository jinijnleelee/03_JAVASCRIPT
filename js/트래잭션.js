
const btn1 = document.getElementById("btn1");
const reset = document.getElementById("reset");

const inputColor = document.getElementById("inputColor");
const span = document.querySelector("span");
const td1 = document.getElementById("td1");

const input1 = document.getElementById("input1");

const td2 = document.getElementById("td2");

const input2 = document.getElementById("input2");

const td3 = document.getElementById("td3");

const input3 = document.getElementById("input3");

const td4 = document.getElementById("td4");

const input4 = document.getElementById("input4");

const td5 = document.getElementById("td5");

const input5 = document.getElementById("input5");


function set(){
    
    if(inputColor.value<10){ 
        return  inputColor.value + "000";


    }else if(inputColor.value<100){
        return inputColor.value + "00";

    }else{
        return  inputColor.value + "0";
    }
}





btn1.addEventListener("click", function () {
    span.innerText = inputColor.value + "초";

  




    


 window.setInterval( function () {
            
    td1.style.backgroundColor = input1.value;
    input1.style.color = input1.value;
            td1.style.transitionDuration = inputColor.value + "s";

    }, set());






window.setInterval( function () {
            
    
    td2.style.backgroundColor = input2.value;
    input2.style.color = input2.value;
    td2.style.transitionDuration = inputColor.value + "s";

}, set());


window.setInterval( function () {
            
    
    td3.style.backgroundColor = input3.value;
    input3.style.color = input3.value;
    td3.style.transitionDuration = inputColor.value + "s";

}, set());


window.setInterval( function () {
            
    
    td4.style.backgroundColor = input4.value;
    input4.style.color = input4.value;
    td4.style.transitionDuration = inputColor.value + "s";

}, set());


window.setInterval( function () {
            
    
    td5.style.backgroundColor = input5.value;
    input5.style.color = input5.value;
    td5.style.transitionDuration = inputColor.value + "s";

}, set());





})


reset.addEventListener("click", function () {
   
})




// function setInterval(){
//     for(let i = 1; i<3; i++){

//         window.setInterval( function () {
            
    
//             td[i].style.backgroundColor = input[i].value;
//             input[i].style.color = input[i].value;
//             td[i].style.transitionDuration = inputColor.value + "s";
        
//         }, 3000);
//     }
// }







// //인풋박스에 숫자를 쓰고 버튼을 누르면 컬러가 바뀐다
// btn1.addEventListener("click", function () {
//     span.innerText = inputColor.value + "초";

    
//    this.setInterval();
    
    
















       
//     input2.addEventListener("keyup", function () {
//         //박스 요소 선택 
//         window.setInterval( function () {
            
//             td2.style.backgroundColor = input2.value;
//             td2.style.transitionDuration = inputColor.value + "s";

//     }, set());
          
       
    
    
//     })

// })
    







