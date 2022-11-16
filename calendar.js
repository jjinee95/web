 // calendar.js

function makeCalendar(month, startDay, lastDate) {  //(몇월, 1일이 몇번째 위치, 마지막 날짜 며칠인지)
    let str = "<table border = 1>"
    str += "<caption>" + month + "월" + "</caption>";
    let days = ["일", "월", "화", "수", "목", "금", "토"]
    
    //thead 요일
    str += "<thead><tr>"
    for(let day of days) {
        str += "<th>" + day + "요일" + "</th>";
    }
    str += "</tr></thead>"


    //tbody 날짜
    str += "<tbody><tr>"
    //스타트데이 개수만큼 빈 td 만들어야
    for(let cnt = 1; cnt < startDay; cnt++) {
        str += "<td></td>";
    }
    for (let day = 1; day <= lastDate; day++) { 
        str += "<td>" + day + "</td>";
        if((startDay + day -1) % 7 == 0) {  //7의 배수 되면
            str += "</tr><tr>"; //줄바꿈
        }
    }
    str += "</tr></tbody></table>"
    document.write(str);
}

function getFirstDay(month) {

    switch(month) {
        case 1: return 7;
        case 2: return 3;
        case 3: return 3;
        case 4: return 6;
        case 5: return 1;
        case 6: return 4;
        case 7: return 6;
        case 8: return 2;
        case 9: return 5;
        case 10: return 7;
        case 11:return 3;
        case 12: return 5;
    }
}

    /* 위랑같음
    if(month == 11) {
        return 3;
    } else if (month == 12) {
        return 5;
    } else if (month == 10) {
        return 7;
    }
}
*/


function getLastDate(month) {
    switch(month) {
        case 1: return 31;
        case 2: return 28;
        case 3: return 31;
        case 4: return 30;
        case 5: return 31;
        case 6: return 30;
        case 7: return 31;
        case 8: return 31;
        case 9: return 30;
        case 10: return 31;
        case 11: return 30;
        case 12: return 31;
    }
}

let month = 11
makeCalendar(month, getFirstDay(month), getLastDate(month));
//makeCalendar(12, 5, 31); 