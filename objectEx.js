

const members = [
    {memId: "user1", memName: "홍길동", memPoint: 88},
    {memId: "user2", memName: "김민규", memPoint: 55},
    {memId: "user3", memName: "황석하", memPoint: 100}
];

function makeHead() {
    let thead = "<thead><tr><th>아이디</th><th>이름</th><th>포인트</th></tr></thead>"
    return thead;
  }

function makeBody() {
    let tbody = "<tbody>";
    //데이터 건수 만큼 반복되는 tr구문 들어와야
    for (let member of members) {  // tr
            tbody += "<tr>";
            for (let prop in member) {  // td
                tbody += "<td>" + member[prop] + "</td>";
            }
            tbody += "</tr>";
    }
    tbody += "</tbody>";
    return tbody;
}
  





// for of => tr, for in => td 가지고 table
// makeHead() => 타이틀(아이디, 이름, 점수)
// makeBody() => 데이터() 

let str = "<table>";
str += makeHead();  // <thead>....</thead>
str += makeBody();  // <tbody>....</tbody>
str += "</table>";
document.write(str);

console.log(document);