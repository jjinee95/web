// function3.js

let obj = {
    name: "홍길동",
    age: 20,
    score: 88
}

//숫자타입
function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(10, 20))


//객체타입
function printObj(args ={name:"init", age:0}) { //값이 없을때
    for (let arg in args) {
        console.log(arg, args[arg]);
    }
}

printObj(obj);



//배열타입
let numAry = [10, 20, 30]
function printAry(ary =[]) {
    for (let num of ary) {
        console.log(num);
    }
}

printAry(numAry);



//함수(기능)타입
function sum(a, b) {
    return a+b;
}
function minus(a, b) {
    return a-b;
}

function printFunc(fnc) { //매개값으로 함수 받음
    let result = fnc(10, 5); // 함수에 10 5 넣은결과 처리받아서
    console.log(result);
}
printFunc(sum);
printFunc(minus);