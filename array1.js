// array1.js

let ary = [10, 20];
// 마지막 추가
ary.push(30);
ary.push(40);
console.log(ary)
 
// 마지막 위치 제거 pop
ary.pop();
console.log(ary)

// 첫번째 제거 shift
ary.shift();
console.log(ary)

//첫번쨰 추가 unshift
ary.unshift(5);
console.log(ary)




let names = [];
while(true) {
    let value = prompt("이름을 입력: ");
    if(value == "stop") {
        break;
    }
    names.push(value)
}

//for
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

//확장 for
for (let name of names) {
    console.log(name);
}

