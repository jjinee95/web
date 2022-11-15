//데이터 타입 오브젝트 타입. 오브젝트 안에 여러 속성, 기능 추가.
const objArray = [{
    name : "홍길동",
    age : 20
}, {
    name : "김민수",
    age : 22
}, {
    name : "박시혁",
    age : 25
}];

let str = "<ul>"
for (let i = 0; i < objArray.length; i++){
    str += "<li>" + "이름: " + objArray[i].name + ", 나이: " + objArray[i]["age"] + "</li>"
    console.log("이름: " + objArray[i].name + ", 나이: " + objArray[i]["age"]); //"" 안넣으면 변수 찾는 것 속성 값 문자열로 적어야
}
str =+ "</ul>"
