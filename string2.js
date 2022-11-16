
// trim 문자열 양 끝 공백 제거
// trimStart 왼쪽 공백만 제거, trimEnd 오른쪽 공백 제거
let str = "    Hello, World    ";
let result = str.trim();  // 매개값 필요X
console.log(result)

// toUpperCase: 대문자로 변경, toLowerCase : 소문자 변경 
result = str.toUpperCase()
            .toLowerCase()
            .trim(); //반환값이 문자열 . 이어서 쓸 수 있음
console.log(result)

result = str.trim().substring(0, 5).toUpperCase() + 
         str.trim().substring(5)

console.log(result)

result = str.substring(0, 10) + str.substring(10).toLowerCase()
console.log(result)
// 위 쉽게 바꾸는 법
result = str.replace("World", "world");
console.log(result)


// 성 김씨인 사람 반환
str = ["김기훈", "김근연", "이소라", "오수현", "박김희"]
function findKim() {
    for (let word of str) {
         if (word.substring(0,1) == "김" ) {
        console.log(word)
        }
    }
}   

findKim();

/* 아래도 같음
function findKim() {
    for (let word of str) {
         if (word.indexOf("김") == 0 ) {
        console.log(word)
        }
    }
} 
 
function findKim() {
    for (let word of str) {
         if (word.starstWith("김")) {  //endsWith : 마지막 글자
        console.log(word)
        }
    }
} 
*/  


//slice : subStirng랑 비슷한 메소드
// slice(시작인덱스, 종료인덱스) : -를 인덱스 값으로 받을 수 있음
str = "Hello, World";
result = str.slice(0, 5);
console.log(result)
result = str.slice(-5, -1); // - : 전체 문자열에서 뺀 위치. 12-5, 12-1
console.log(result)

result = str.slice(7, 11);
console.log(result)


// 주민번호(960305-1234567)

function checkGender(jumin) {
    if (jumin.substring(7, 8) == "1" || jumin.substring(7, 8) == "3") {
        return "남자";
    } else if (jumin.charAt(7) == "2" || jumin.substring(7, 8) == "4") {
        return "여자";
    } else {
        return "잘못된 번호입니다."
    }
}

result = checkGender("960305-1234567");
console.log(result);
result = checkGender("960305-2234567");
console.log(result);
result = checkGender("960305-3234567");
console.log(result);
result = checkGender("960305-4234567");
console.log(result);
result = checkGender("960305-5234567");
console.log(result);