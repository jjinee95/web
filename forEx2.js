// forEx2.js

let str = "<table border=1>";
for(let j = 2; j <= 5; j++) {
    let dan = j;
    for (let i = 1; i<= 9; i++) {
        str += `<tr><td> ${dan} </td><td> * </td><td> ${i}</td><td> = </td><td> ${dan*i}</td></tr>`;
     }
}
str += "</tr></table>";
document.write(str);




str = "<table border=1><tr>";
for (let j = 1; j <= 9; j++) {
    for (let i= 2; i <= 5; i++) {
        str += `<td> ${i} </td><td> * </td><td> ${j}</td><td> = </td><td> ${j*i}</td><td>`;
     }   
     str += "</tr><tr>"; // 2*1 3*1 4*1 5*1 먼저 -> 줄바꿈 
}
str += "</tr></table>";
document.write(str); 





let cnt = 1;
str = "<table border=1><tr>";
for (let j = 1; j <= 5; j++){   //tr
    str += "<tr>"
    for (let i = 1; i <= 5; i++) {   //td
         if (i <= j) { //i와 j의 값을 비교해서 보여줄 경우와 안보일 경우를 처리
            str += `<td>${cnt}</td>`;
        } else {
            str += '<td></td>';
        }
        cnt++;
    }
    str += "</tr>";
}
str += "</tr></table>";
document.write(str);