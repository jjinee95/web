// +, -, *, /, %(나머지)

//let num1 = 10; met num2 = 10;
let num1 = num2 = 10;
let result = (num1 + num2);
console.log("결과값 " + result); //--> 결과값 20
console.log("결과값 " + num1 + num2); // --> 결과값 1010 : 문자열이 먼저 오면 문자열과 문자열 합치는 것으로 받아들임 
console.log("결과값 " + (num1 + num2)); //--> 결과값 20
console.log("결과값 " + num1 - num2); // --> 문자열 결과값10 - 10 --> Not a Number
console.log("10" - num1); // -->10 문자열("") 이지만 숫자타입이면 숫자타입으로 변환해서 처리
console.log(num1 / num2); // 1
console.log(num1 % num2); // 0
console.log(num1 % 4); //2


// if 구문 - true false
if (100 <=80) {
    //true면 실행할 내용
}

Math.random(); // 0 ~ 1 사이의 임의 난수 만드는 기능 0.3456846, 0.849849 (1은 포함X)
Math.random() *30; // 0~30 사이의 임의 난수-->실수
parseInt(Math.random() *30);  //parseInt 정수부분만 가져옴

num1 = parseInt(Math.random() * 30);
console.log(num1);

// num2  => 1~50 까지의 임의 수를 생성해서 할당
// result = num1 + num2 : 합이 60 이상이면 "60보다 큰수입니다."

num2 = parseInt(Math.random() * 50) +1; //1~50
result = num1 + num2;

if ( result >= 60){
    console.log("60보다 큰수입니다.")
}


// 누적연산
let sum = 0;
/*sum = num1; //
console.log(sum)*/ 

sum = sum + num1;
sum = sum + num1;
sum = sum + num1;
console.log(sum); // -> 5 15,  9 27 이런식으로
// == sum = sum += num1 

sum *= num1; // sum = sum * num1;
sum /= num1; // sum = sum / num1;
sum %= num1; // sum = sum % num1;

sum = "";
sum += "<p>Hello</p>"; // "" +  "Hello" (태그도 적용O)
sum += "<p>World</p>"; // "" +  "Hello" + "World"

console.log(sum);

document.write(sum);

// 배열
let fruits = ["Apple", "Banana", "Cherry"]
sum ="<ul>";
sum += "<li>" + fruits[0] + "</li>";
sum += "<li>" + fruits[1] + "</li>";
sum += "<li>" + fruits[2] + "</li>";
sum += "</ul>";
document.write(sum);

sum ="<table border=1><tbody>"
sum += "<tr><td>" + fruits[0] + "</td></tr>";
sum += "<tr><td>" + fruits[1] + "</td></tr>";
sum += "<tr><td>" + fruits[2] + "</td></tr>";
sum += "</tbody></tale>";
document.write(sum);


//객체로
fruits = [{fname:"Apple", price: 1000}, 
          {fname:"Banana", price: 1500}, 
          {fname:"Cherry", price: 2000}]
              
/* sum ="<table border=1><tbody>"
sum += "<tr><td>" + fruits[0].fname + "</td>";
sum += "<td>" + fruits[0].price + "</td></tr>";
sum += "<tr><td>" + fruits[1].fname + "</td>";
sum += "<td>" + fruits[1].price+ "</td></tr>";
sum += "<tr><td>" + fruits[2].fname + "</td>";
sum +="<td>" + fruits[2].price + "</td></tr>";
sum += "</tbody></tale>";
document.write(sum); */


// 1500원 이상인 과일만 테이블에 나타나도록

sum = "<table border=1><tbody>"
if (fruits[0].price >= 1500) {
    sum += "<tr><td>" + fruits[0].fname + "</td><td>" + fruits[0].price + "</td></tr>";
}
if (fruits[1].price >= 1500) {
    sum += "<tr><td>" + fruits[1].fname + "</td><td>" + fruits[1].price + "</td></tr>";
}
if (fruits[2].price >= 1500) {
    sum += "<tr><td>" + fruits[2].fname + "</td><td>" + fruits[2].price + "</td></tr>";
}

sum += "</tbody></table>";
document.write(sum)

//위 for 반복문으로 간단하게
for (let i = 0; i < 3; i++) {
    if (fruits[i].price >= 1500) {
        sum += "<tr><td>" + fruits[i].fname + "</td><td>" + fruits[i].price + "</td></tr>";
    }
}
document.write(sum)

