// forEx.js


let str = "<table border = 1, ><tr>";
for (let i = 1; i < 26; i++) {
    str += "<td>" + i + "</td>";
    if( i % 5 == 0) {  
        str += "</tr><tr>";
    }
}
str += "</tr></table>"
document.write(str)



str = "<table border=1><tr>";
let cnt = 1;
let num = 1;
for (let i = 1; i <= 25; i++) {
    str += "<td>" + num + "</td>";
    num = num +5;
    if (i % 5 == 0) {
        num = ++cnt; 
        str += "</tr><tr>"
    }
}
str += "</tr></table>"
document.write(str)




// 중첩 for
str = "<table border=1><tr>";
for(let j = 1; j <= 5; j++ ) {  
    for (let i = j; i <=25; i +=5) { // 안에 반복 끝나면 바깥. 
        str += "<td>" + i + "</td>";
    }
    str += "</tr><tr>"
}
str += "</tr></table>"

document.write(str)