// array2.js
// 배열 관련 메소드

let names = ["윤성현", "김준혁", "서승민", "이정용"];
names.length;
names.push("김기훈");


//배열에서의 for 반복문 : forEach 
//매개값으로 함수 받음. 함수 이름 안붙여도 됨(익명함수) 
//배열에 들어있는 개수 만큼 함수 실행
names.forEach(function() {    //매개함수
    console.log("for 반복문")
}); 


names.forEach(function(val, idx, ary) {    
//매개함수 매개값 자동으로 정의돼 있음 (값, 인덱스값, names 배열)
    console.log(val, idx, ary)
}); 