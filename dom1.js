// dom1.js

console.log('dom 실행');


//querySelector 선택자 인자로 받아와 일치하는 문서 요소
let show = document.querySelector('#show'); //<div id='show></div>
console.log(show)

let pTag = document.createElement('p') //<p></P> p태그 만들겠다
pTag.innerText ='Hello';
console.log(pTag);


// div태그(show) 자식요소로 pTag 넣기
show.appendChild(pTag);
console.log(show)


let btn = document.createElement('button'); //<button></button>
btn.innerText ="클릭";
show.appendChild(btn);
console.log(btn)


// 버튼에 onclick 라는 속성 추가해 객체 만들기
btn.onclick = function() {
    console.log('클릭되었습니다.')
}


// 속성지정.  버튼에 id값으로 btn 지정
btn.setAttribute('id', 'btn') 


/*let fruits = ['apple', 'banana', 'cherry'];
let ul = document.createElement('ul');
for(let fruit of fruits) {
    let li = document.createElement('li'); //<li></li>
    li.innerText = fruit;
    ul.appendChild(li);
}
show.appendChild(ul)
console.log(ul)
console.log(show)*/

let sendp = document.querySelector('#show>p:nth-of-type(2)')
console.log(sendp)
sendp.remove(); 

// querrySelector 선택자
// createElement 요소
// 부모.appendChild 자식
// remove()  삭제


// <p>내가좋아하는과일><ol><li>복숭아</li><li>사과</li><li>포도</li></ol> - p show에 소속


let ol = document.createElement('ol')
//ol.innerText = '내가 좋아하는 과일'
show.appendChild(ol)

let fruits = ['복숭아', '사과', '포도'];
for(let fruit of fruits) {
    let li = document.createElement('li');
    li.innerText=fruit;
    ol.appendChild(li);
}

let fruitTxt = document.createTextNode('내가 좋아하는 과일')
ol.appendChild(fruitTxt)


// 텍스트노드. 자식으로 텍스트 <button id=btn>클릭</button>
let txt = document.createTextNode('클릭')//
btn.appendChild(txt)


console.log(show)