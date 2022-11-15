// 객체 : 복잡한 형태의 데이터구조
// {name: "홍길동", age: 20, showInfo: function() {...}}


//객체 만드는 다른 방법 class 선언해서 만들기. class-값의 틀 규정짓는
// 학생번호, 학생이름, 전화번호, 혈액형, 점수
class Student {  // class 이름 지을때 관례상 대문자로 선언
    constructor(stdNo, stdName, phone, bloodType, score) {  //constructor : 생성자.
        this.stdNo = stdNo;  //this : 만들어진 객체 가리키는 키워드. 
        this.stdName = stdName;
        this.phone = phone;
        this.bloodType = bloodType;
        this.score = score;
    }
    showInfo() {  //메소드 추가 (객체에서는 펑션사용했지만 클래스에선 함수처럼 정의)
        return `학번은 ${this.stdNo}, 이름은 ${this.stdName} 입니다.`;
    }
    showBloodType() {
        return `${this.stdName}의 혈액형은 ${this.bloodType} 입니다.`
    }
    setScore(score) {  //값 바꾸는 메소드
        this.score = score;
    }
    getScore() {
        return `${this.stdName}의 점수는 ${this.score} 입니다.`
    }
    setPhone(phone) {  //대체로 값 지정할 때 : set 
        this.phone = phone;
    }
}

let std1 = new Student('1-001', '홍길동', '111-111', 'A', 80);
let std2 = new Student('1-002', '홍영찬', '222-222', 'B', 77);
let std3 = new Student('1-003', '박희수', '333-333', 'O', 87);

console.log(std1.showBloodType());

std1.setScore(82)  //값 바꾸는 메소드 사용 80->82
console.log(std1.getScore())

let students = [];  //neW Array(); . 배열객체
students.push(std1);
students.push(std2);
students.push(std3);

for (let student of students) {
    console.log(student.showInfo());  //메소드 ()붙어야 실행
}


// 삼각형을 정의하는 클래스.

class Triangle {
    // 속성 : 밑변 width 높이 height
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {   //삼각형 너비 계산
        return this.width * this.height / 2;
    }
    // 밑변,
    
    setWidth(width) {
        this.width = width;
    }

    // 높이
    setHeight(height) {
        this.height = height;
    }
}

let trian1 = new Triangle(10, 6)
trian1.setWidth(20);
trian1.setHeight(10);
console.log(`삼각형의 너비는 ${trian1.getArea()}`)