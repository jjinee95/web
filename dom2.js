// dom2.js

let pTag = document.createElement('p');
let txt = document.createTextNode('Hello')
pTag.appendChild(txt)

//window.prompt('경고창!!')
//console.log(window) //윈도우에 내장되어있는 기능들

//window.onclick = function() {  //on~~ 이벤트관련 속성들
//    console.log('윈도우 클릭')
//}



//윈도우 객체 다 로딩 된다면 펑션 실행
//웹브라우저 전체 다 읽은 후
window.onload = function() {
    document.querySelector('.show').appendChild(pTag);
    
    
    //버튼선택 > 클릭이벤트 등록
    let btn = document.querySelector('#btn');
    btn.onclick = function() {
        //이름값을 가져오는 부분
        let name = document.querySelector('#name').value;
        let age = document.querySelector('input[name="age"]').value;
        if(!name || !age) {
            window.alert("값을 입력하세요!");
            return;
        }
        //  li생성. text 값으로 name, age 넣고 ul 자식 등록
        let liTag = document.createElement('li');
        let txt = document.createTextNode(name + ', ' + age);
        liTag.append(txt);
        document.getElementById('list').append(liTag);

        //초기화
        document.querySelector('#name').value ="";
        document.querySelector('#age').value ="";
    }
    console.log(btn);
}

