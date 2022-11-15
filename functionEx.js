let memberAry = [{memberId:"user1 ", memberName:"사용자1 ", memberAddr:"대구 중구 100" },
                 {memberId:"user2 ", memberName:"사용자2 ", memberAddr:"대구 중구 200" },
                 {memberId:"user3 ", memberName:"사용자3 ", memberAddr:"대구 중구 300" }
                ]

  // 자바스크립트 문자열 : " ", ' ', ``              
/*function makeTr(memberObj) {
    // tr 태그를 만들어서 반환.
    let tr = "<tr>";
    tr += "<td>" + "id: " + memberObj.memberId + "</td>"
    tr += "<td>" + "name: " + memberObj.memberName + "</td>"
    tr += "<td>" + "Addr: " + memberObj.memberAddr + "</td>"
    tr += "</tr>"
    return tr;
}                

let str = "<table>";
for (let i = 0; i < memberAry.length; i++){
    str += makeTr(memberAry[i]); 
}
str += "<table>"
document.write(str); */


 //tr => th, th, th : 회원이이디, 회원 이름, 회원주소
function makeHead() {
    let titles = ['회원아이디', '회원이름', '회원주소']
        let tr = '<tr>';    
    for (let i = 0; i < memberAry.length; i++){
        tr += `<th>${titles[i]}</th>`;
    }
    tr += '</tr>';
    return tr;
  }

/*let tr = `<tr><th>회원아이디</th><th>회원이름</th><th>회원주소</th></th>` == or (let i = 0; i < memberAry.length; i++){
        tr += `<th>${titles[i]}</th>`;
    } */


function makeTr(memberObj) {
    let tr = `<tr><td>${memberObj.memberId}</td><td>${memberObj.memberName}</td><td>${memberObj.memberAddr}</td></tr>`
    return tr;
}
let str = "<table>";
str += makeHead()
for (let i = 0; i < memberAry.length; i++){
    str += makeTr(memberAry[i]); 
}
str += "<table>"
document.write(str);


