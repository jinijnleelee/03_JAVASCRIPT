const testnext = test.firstElememtsibling.nextElememtsibling;
testnext.addEventListener("click", function() {

    window.alert("확인");
    testnext.nextElememtsibling.nextElememtsibling.style.backgrounColor ="red";
})