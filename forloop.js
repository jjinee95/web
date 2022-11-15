// for 반복문
// 초기값(let i = 0), 조건식(i < 5), 증가치 필요(i = i + 1) = (i++)
for (let i = 1; i < 6; i += 1) {
    console.log(i)
    //1++ 증가치 여기에 와도 상관없음
}
// i +=2; // i= 1, 3, 5, 7 9
console.log('end of for'); //for 구문 끝났다는 의미

// 증감도 가능
for (let i = 10; i >= 0;) {
    console.log(i);
    i -= 2
}

console.log('end of for');

// for : 1~10
for (let i = 1; i <= 10; i += 1){
    console.log(i)
}

console.log('end of for');

//for 1 3 5 7 9
for (let i = 1; i <= 10; i += 2){
    console.log(i)
}

console.log('end of for');

//for 2 4 6 8 10  --> 나머지가 0이면 짝수, 1이면 홀수
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

console.log('end of for');

let sum = 0
for (let i = 1; i <=10; i += 1) {
    sum += i;
}
console.log(sum);
console.log('end of for');

sum = 0
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        sum += i;
    }
}
console.log(sum) // 짝수합 30
console.log('end of for');


sum = 0
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 1) {
        sum += i;
    }
}
console.log(sum) // 홀수합 25
console.log('end of for');

//구구단
for (let num = 1; num <= 9; num++) {
    console.log("3 * " + num + " = " + (3 * num))
}
console.log('end of for');


let dan = 4;
for (let num = 1; num <=9; num++) {
    console.log(dan + " * " + num + " = " + (dan * num));
}
console.log('end of for');


/*반복문 안에 반복문

for (let k = 2; k <= 9; k++) {
    let dan = k;
    for (let num = 1; num <=9; num++) {
    console.log(dan + " * " + num + " = " + (dan * num));
    }
}

console.log('end of for');*/





/*document.write('<table border=1>');
for (let k = 2; k <= 5; k++) {
    let dan = k;
    for (let num = 1; num <=9; num++) {
        document.write('<tr>');
        console.log(dan + " * " + num + " = " + (dan * num));
        document.write('<td>' + dan + '</td><td>*</td><td>'+num+'</td><td>=</td><td>'+(dam)+'</td>');
        document.write('</tr>');
    }
}
document.write('</table>');
console.log('end of for');*/




let fruits = [{fname:"Apple", price: 1000},     // index: 0
              {fname:"Banana", price: 1500},    // index: 1
              {fname:"Cherry", price: 2000},    // index: 2
              {fname:"Melon", price: 1700},     // index: 3
              {fname:"Tomato", price: 1200},    // index: 4
              {fname:"Mango", price: 1900},     // index: 5
              {fname:"BlueBerry", price: 2200}] // index: 6

document.write('<table>') 
document.write('<thead><tr><th>과일</th><th>가격</th></tr></thead>'); 
document.write('<tbody>');
    sum = 0;
    for (let i = 0;  i < 7; i++) {
        document.write('<tr><td>' + fruits[i].fname + '</td><td>' + fruits[i].price + '</td></tr>');
    }
    document.write('<tr><td>합계</td><td>' + sum + '</td></tr>')
document.write('<tbody>');
document.write('<table>');

//확장 for (배열과 같이 쓸 때 반복문 간단히)
for (let fruit of fruits) {
    // fruit -> {frame: 'Apple', price:1000}
    console.log('과일: ' + fruit.fname + ", 가격: " + fruit.price);
}
