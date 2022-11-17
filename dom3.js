// dom3.js
let members = [{nam: '홍길동', age: 20, birth:'2000-03-02'},
               {nam: '김민수', age: 21, birth:'2001-03-23'},
               {nam: '박희선', age: 25, birth:'1998-07-02'}                
            ];

window.onload = loadCallback;

function loadCallback() {
    // 최초 리스트 출력.
    let table = document.getElementById('list');
    table.setAttribute('border', '1');
    table.append(makeThead());// <thead>....</thead>
    table.append(makeTbody());// <tbody>....</tbody>

    // 추가기능.
    document.getElementById('btn').addEventListener('click', addFunc); // 온클릭으로 해도되고ddEventListener 사용해도 : 이벤트타입, 실행함수)
    document.getElementById('delBtn').addEventListener('click', deleteFnc);
    document.getElementById('modBtn').addEventListener('click', modifyFnc);

}
    // tr에 mouseover, mouseout 이벤트
    //let trs = document.querySelectorAll ('tbody>tr') // 그낭 쿼리셀렉터는 처름 하나만
    /*console.log(trs);
    for (let tr of trs) {
        tr.addEventListener('mouseover', function() {tr.style.backgroundColor = 'yellow'});
        tr.addEventListener('mouseout', function() {tr.style.backgroundColor = ''});
    }
}*/

function modifyFnc () {
    
}



function deleteFnc () {
    let allChk = document.querySelectorAll('tbody input[type="checkbox"]:checked'); //티바디에 있는 인풋테그만 삭제
    console.log(allChk);
    for(let chk of allChk) {
        chk.parentElement.parentElement.remove();
    }
}



//클릭이벤트 실행되면 발생할 함수
function addFunc () {
    let name = document.querySelector('#name').value;
    let age = document.getElementById('age').value;
    let birth = document.querySelector('input[name="birth"]').value;
    let props = {name: name, age: age, birth: birth} //[name, age, birth]
     /*//반복
     let tr = document.createElement('tr');
     for (let prop of props) { 
         //반복
         let td = document.createElement('td');
         let txt = document.createTextNode(prop);
         td.append(txt);
         tr.append(td);
    }*/
    // let tr = makeRow(props)
     document.querySelector('#list>tbody').append(makeRow(props)); // 만들어진 리스트갑 티바디에 붙여야함
}


function makeThead() {  
    //<thead><tr><th>이름</th><th>나이</th><th>생일</th></tr></thead>
    let title = ['이름', '나이', '생일', '삭제', ] 
    let thead = document.createElement('thead');
    let tr = document.createElement('tr');
    for (let head of title) {
        let th = document.createElement('th');
        th.innerText = head;
        tr.append(th);
    }

    td = document.createElement('th');
    let check = document.createElement('input');
    check.addEventListener('click', allCheckFnc);
    check.setAttribute('type', 'checkbox');
    td.append(check);
    tr.append(td);
    
    
    thead.append(tr);
    return thead;
}


function allCheckFnc () {
   let allchk = document.querySelectorAll('input[type="checkbox"]') //체크박스 전체를 선택
   //전체 체크박스를 대상으로 타이틀에 있는 체크박스와 같은 값으로 변경
   for (let chk of allchk) {
        chk.checked = this.checked;
   }    
}




function makeTbody() {
    //<tbody><tr><td>값</td><td>값</td><td>값</td></tr></tbody>
    let tbody = document.createElement('tbody');
    for (let member of members) { //{nam: '홍길동', age: 20, birth:'2000-03-02'}
        //반복
        /*let tr = document.createElement('tr');
        for (let prop in member) { 
            //반복
            let td = document.createElement('td');
            let txt = document.createTextNode(member[prop]);
            td.append(txt);
            tr.append(td);
        }
        tbody.append(tr);*/
        let tr = makeRow(member);
        tbody.append(tr);
    }
    return tbody;
}


function makeRow (member={}) { // 이름, 나이, 생일 => tr 생성함수
     //반복
     let tr = document.createElement('tr');
     tr.addEventListener('mouseover', mouseOverFnc);
     tr.addEventListener('mouseout', function() {tr.style.backgroundColor = ''});
     tr.addEventListener('click', clickFnc, true); //false 버블링 true 캡쳐링
     for (let prop in member) { 
         //반복
         let td = document.createElement('td');
         let txt = document.createTextNode(member[prop]);
         td.append(txt);
         tr.append(td);
    }
    //<td><button>삭제</button></td>         
    let td =  document.createElement('td');
    let btn = document.createElement('button');
    btn.addEventListener('click', function() {
        console.log('button click')/*btn.parentElement.parentElement*/
    event.stopPropagation()
    tr.remove();
}, false);
    btn.innerText='삭제';
    td.append(btn);
    console.log(tr);
    tr.append(td);


    //선택 : 체크박스
    td = document.createElement('td');
    let check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    td.append(check);
    tr.append(td);

    

    
    
    return tr;
}

function mouseOverFnc () {
    //console.log(this.style.backgroundColor = 'yellow'); // tr 외부에서 정의한적 x this 써야
    let tr = this;
    console.log(tr.style.backgroundColor = 'yellow');
    //console.log(tr.children[0].innerText);
    //console.log(tr.children[1].innerText);
    //console.log(tr.children[2].innerText);
    //document.getElementById('name').value = tr.children[0].innerText;
    //document.getElementById('age').value = tr.children[1].innerText;
    //document.getElementById('birth').value = tr.children[2].innerText;
}

function clickFnc () {
    console.log('click')
    tr = this;
    document.getElementById('name').value = tr.children[0].innerText;
    document.getElementById('age').value = tr.children[1].innerText;
    document.getElementById('birth').value = tr.children[2].innerText;
    event.stopPropagation();
}
