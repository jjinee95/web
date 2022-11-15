
let students = [];
const std1 = {
    std_no: '1-001',
    std_name: "홍길동",
    std_math: 80,
    std_eng: 85
}
const std2 = {
    std_no: '1-002',
    std_name: "김현식",
    std_math: 70,
    std_eng: 75
}
const std3 = {
    std_no: '1-003',
    std_name: "김익수",
    std_math: 90,
    std_eng: 70
}

students[0] = std1;
students.push(std2);
students.push(std3); // Array.push(값): 배열의 마지막 위치에 추가

console.log(students.length)


function getStudent(name) {
    // 이름을 매개값으로 students 배열의 요소에서 학생의 이름이 매개값이랑 같은 학생을 반환
    // students 반복.
    for (let std of students ) {
        if (std.std_name == name) {
        return std; // return : 반환하겠다 & 함수호출 끝
        }
    }
}

let result = getStudent("홍길동");
console.log(result)