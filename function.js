//{name : "", age: "", showifo: "기능"}

function sayHello(msg, name) { //name= 매개변수. 어떤 값 올지 모름. 
    console.log(msg +", " + name + "!!");
} // 함수 정의 . 


sayHello("안녕하세요", "김익수"); // 함수호출(call) 해야 기능 실행 됨. () 매개값 대입해서 함수 호출
sayHello("반갑습니다", "홍길동");

function sum(num1, num2) {
    let result = num1 + num2;
    return result; //함수를 호출한 영역을 결과값 반환(return)
}

let result = sum(10, 20); // 새로운 변수에 함수 담을 수 있음
console.log(result)

console.log("결과: " + sum(result, 30)); 

//sayHello 함수는 반환되는 값이 없음. 반환해서 새로운 변수에 못담음 




let member = {
    memberId: "user1",
    memberName: "사용자1",
    memberAddr: "대구 중구"
}

function showInfo(obj) {
    console.log("회원아이디: " + obj.memberId + ", 회원이름: " + obj.memberName + ", 회원주소: " + obj.memberAddr)
}

showInfo(member);
//결과는 같음
showInfo({
        memberId: "user1",
        memberName: "사용자1",
        memberAddr: "대구 중구"
});





function makeList(obj) {
     //<ul><li>...</li></ul>
     let li = "<li>";
     li += "id: " + obj.memberId;
     li += "name: " + obj.memberName;
     li += "Addr: " + obj.memberAddr;
     li += "</li>";
     return li;
}

let memberAry = [{memberId:"user1 ", memberName:"사용자1 ", memberAddr:"대구 중구 100" },
                 {memberId:"user2 ", memberName:"사용자2 ", memberAddr:"대구 중구 200" },
                 {memberId:"user3 ", memberName:"사용자3 ", memberAddr:"대구 중구 300" }
                ]

// document.write(str);
let str = "<ul>";
for (let i=0; i < memberAry.length; i++) {
    str += makeList(memberAry[i]);
}
str += "</ul>"
document.write(str);