// variable1.js
// 객체(Object) = 복잡한 구조의 데이터 저장.
let person1 = { // person1 이라는 변수 하나 안에 name age hiegh marriage 속성
    name: "홍길동",
    age: 20,
    height: 167.7,
    marriage: false
}

console.log(person1.name); //getter (person1.name) = (peson["name"])
person1.name = "hongkildong"; // setter 값을 세팅
console.log(person1.name);
console.log(person1["age"]);
person1["age"] = 22; // = person1.age = 22;
console.log(person1.age);

let field = "height";
console.log(person1[field]);
field = "marriage";
console.log(person1[field]);

// 여러건 정보 저장. 배열(Array) [] 넘버타입이라 "" X
let scoreArray = [90, 80, 85, 70, 88];
console.log(scoreArray[0]); // getter
// 첫번째 인덱스 값 0부터 시작 (위치 -1)
scoreArray[0] = 95; //setter
console.log(scoreArray[0]);
console.log(scoreArray[2]);

// 배열 + 객체 
let 자바스크립트반 = [100];
console.log(자바스크립트반[0])

// 학생의 이름, 학생번호, 점수
let stud1 = {
    studName: '이가영',
    studNo: '1-001',
    score: 90
}
let stud2 = {
    studName: '문민희',
    studNo: '1-002',
    score: 93
}
let stud3 = {
    studName: '박혜진',
    studNo: '1-003',
    score: 95
}
let stud4 = {
    studName: '이재현',
    studNo: '1-004',
    score: 88
}
let ourClass = [stud1, stud2, stud3];
console.log(ourClass[0]);
console.log(ourClass[0].studName);
console.log(ourClass[1].score);
console.log(ourClass[2]["studNo"]);
//(ourClass[1].score) = (ourClass[1]["score"])

console.log(ourClass[1].score == stud2.score);
console.log(ourClass[2]['studNo'] == stud3.studNo);
ourClass[3] = stud4;

console.log(ourClass.length) //length : 배열이 가지고 있는 크기 반환해주는 속성 --> 4
ourClass[4] = {
    studName: '김동견',
    studNo: '1-005',
    score: 89
}
console.log(ourClass.length) // --> 위 추가돼서 5
//ourClass 점수의 평균
let average = (stud1.score + stud2.score + stud3.score + stud4.score + ourClass[4].score) / ourClass.length; //=5
console.log("우리반의 평균은 " + average + " 입니다.")