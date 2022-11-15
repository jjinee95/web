let score = parseInt(Math.random() * 60) + 40; // 40~100 정수값 임의의 정수값.
let pass = "";
if (score >= 60) {
    pass = "합격";
} else {
    pass = "불합격";
}
console.log(pass);

//위 간단하게 표현
pass = (score>=60) ? "합격" : "불합격";
console.log(pass);




// if 조건문 하나이고 조건을 4개의 조건으로 한번만 실행

if (score >= 90) {
    pass = "A";
} else { //90보다 작은 값.
    if (score >= 80){
        pass ="B";
    }
    else { //80보다 작은 값.
        if (score >= 70){
            pass = "C";
        }
        else { //70보다 작은 값.
            pass = "D";
        }
    }
}

console.log(pass);


//위 간단하게 표현
if (score >= 90) {
    pass = "A";
} else if (score >=80) {
    pass = "B";
} else if (score >=70) {
    pass = "C";
} else {
    pass = "D";
}

console.log(pass);


// 순서 중요
if (score >= 70) {
    pass = "C";
} else if (score >=80) {
    pass = "B";
} else if (score >=90) {
    pass = "A";
} else {
    pass = "D";
}

console.log(pass); // --> 결과 C, D만 나옴



// if 조건문만 있다면

//score = 80;
if (score >= 90) {
    pass = "A";
} if (score >=80) {
    pass = "B";
} if (score >=70) {
    pass = "C";
} if (score < 70) { 
    pass = "D";
}
console.log(pass); // --> 결과 C만 나옴 



// 95, 85, 75 => A+, B+, C+
if (score >= 95){
    pass = "A+"
} else if (score >= 90) {
    pass = "A";
} else if (score >= 80) {
    pass = "B+";    
} else if (score >= 80) {
    pass = "B";
} else if (score >= 75) {
    pass = "C+";    
} else if (score >= 70) {
    pass = "C";
} else {
    pass = "D";
}

console.log(pass);