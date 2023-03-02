//노트확인하기
document.getElementById("btn1").addEventListener("click", function() {

    //부모
    //요소.parentNode : 요소의 부모노드를 탐색해서 반환

    //자식
    //요소.childeNode : 요소의 자식노드를 모두 반환 (NodeList 형태)
    //요소.firstChild : 첫 번째 자식 노드를 탐색해서 반환
    //요소.lastChild : 마지막 자식 노드를 탐색해서 반환
    //요소.childeNode[인덱스] : 인덱스 번째 자식 노드를 탐색해서 반환

    //형제
    //요소.previousSibling : 요소의 이전 형제 노드를 반환
    //요소.nextsibling : 요소의 다음형제 노드를 반환

    //#test 의 자식 노드를 모두 얻어와서 확인
    const testNodeList = document.getElementById("test").childNodes;
    console.log(testNodeList);


    //노드 탐색
    const lil = document.getElementById("lil");
    console.log(lil.parentNode); //부모 노드 형식 (ul#test)

    //#lil의 부모 배경색을 orange 로 변경
    lil.parentNode.style.backgrounColor = "orange";

    //#lil의 부모 노드의 마지막 부분에 "ABCD" 라는 text node 추가 
    //요소.appent(요소 또는 노드) : 마지막 자식으로 추가
    lil.parentNode.append("ABCD");

    const test = document.getElementById("test");
    //#test의 첫번째 자식노드 찾기 
    console.log(test.firstChild);

    //#test의 마지막 자식노드 찾기
    console.log(test.lastChild);
    //#test의 자식노드 중 5번째 인덱스 노드 찾기
    console.log(test.childNodes[5]);
    //#test의 자식노드중 5번째 인덱스 노드의 마지막 자식으로 "222" 추가하기
  test.childNodes[5].append("222");
    //#test의 자식노드중 5번째 인덱스의 이전 형제 도느
    test.childNodes[5].previousSibling; //4번
    //#test의 자식노드중 5번째 인덱스 의 다음 형제 노드 
    test.childNodes[5].nextSibling;
    //#test의 자식노드중 5번째 인덱스의 이전 형제 노드의 이전 형제 노드 
    test.childNodes[5].previousSibling




})

const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function(){

   // children : 자식 요소만을 모두 선택
   // parentElment : 부모 요소 선택

   // firstElementCilde : 첫번째 자식 요소 선택
    //lastElementChild : 마지막 자식 요소 선택
   
   
   // previousElementSibling : 이전 형제 요소 선택
    // naxtElementSibling : 다음 형제 요소만을

    const test = document.getElementById("test");//부모요소
    const lil = document.getElementById("lil");//자식요소


    //#lil의 부모 요소 탐색
    console.log(lil.parentElement);


    //#lil의 부모요소의 부모요소 탐색 
    console.log(lil.parentElement.parentElement);
    //#test의 모든 자식요소 탐색
   const list = test.children; // HTMLCollection 형태로 반환
    //#test의 첫번째 자식요소 탐색
    console.log(test.firstElementChild);
    //#test의 마지막 자식요소 탐색
    console.log(test.lastElementChild);
      //#test의 자식 요소 중 2번째 인데스의 이전형제 요소 클릭시
      //작성된 내용을 alert로 클릭
      //해당 요소의 다음형제의 다음형제 요소의 배경색을 red로 변경 
    list[2].previousElementSibling.addEventListener("click", function () {
    alert(this.innerText);

    this.nextElememtsibling.nextElememtsibling.style.backgrounColor = "red";
    


    })
})


//innerHTML 
const btn3 = document.getElementById("btn3");
const div3 = document.getElementById("div3");

let const3 = 1;

btn3.addEventListener("click", function(){
    if(const3 <= 10) {
        const input = "<input type = 'text'> ";

        div3.innerHTML += "<div>" + const3 + input + "</div>";

        const3++;

    }


})


//createElememnt
const btn4 = document.getElementById("btn4");
const div4 = document.getElementById("div4");

let const4 = 1;

btn4.addEventListener("click", function() {

    if(const4 <= 10){
        //doucument.createElement("태그명");
        //-> 해당 태그 욧를 생성하여 반환
        // -> 요소가 생성될 뿐이지 화면 추가되는것이 아니다

        const div = document.createElement("div");
        const input = document.createElement("input");

        //# div4 > div > input 

        //div의 내용으로 const4 추가 후 1증가
        div.innerText = const4;
        const4++;

        //input을 div의 마지막 자식으로 추가
        div.append(input);

        div4.append(div);
    }

})
