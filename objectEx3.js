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
students.push(std3);
students.push({
    std_no: '1-004',
    std_name: "손수희",
    std_math: 88,
    std_eng: 95
})



function getStudents(mathScore) {
    // 조건 여러가지일때 새로운 배열을 선언. 점수 하나만 담는게 아니라 학생안에 모든 정보 담기위해
    let overMath = [];
    for (let std of students) {
        if (std.std_math + std.std_eng >= mathScore) {
                overMath.push(std);
        }
    }
    return overMath;
}

let result = getStudents(150);
console.log(result);



// 영어점수 제일 큰 학생 반환. 
function getMaxStudent() {
    let temp = 0;  // 85, 75, 70
    let student = {};

    for (let std of students) {
        if (std.std_eng > temp) {
            temp = std.std_eng;
            student = std;
        }
    }
    return student;
} 



result = getMaxStudent();
console.log(result);