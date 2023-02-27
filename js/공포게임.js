

const mouse = document.getElementById("mouse");
const love = document.getElementById("love");



var count = 0;



mouse.addEventListener("mouseover", function() {

	if (count < 10) {
        love.innerHTML += "<div id='love'><img src='/img/캡처2.PNG' ></div>";
        count++;
    } else {
        love.innerHTML = "<div id='love'><img src='/img/캡처3.PNG' ></div>";
    }
});

  
       
   