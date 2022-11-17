// array3.js

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

// indexOf(값) => number
let result = beasts.indexOf('bison')  // bison의 인덱스값 위치 
console.log(`bison의 위치 인덱스값 : ${result}`)


result = beasts.lastIndexOf('bison')  
console.log(`bison의 위치 인덱스값 : ${result}`)


// 값이 있는지 없는지 

if (beasts.includes('bison')) {
    console.log(`bison이 존재`)
} else {
    console.log(`bison이 없음`)
}


function includes(name) { 
    for (let beast of beasts) {
        if (beast == name) {
            return true;
        } else {
            return false;
        }
    }
}
result = includes('bison'); // false -> return 종료됨. 이런경우 if else 쓰면 안됨
console.log(result);



function includes(name) { 
    let isChecked = false; // isChecked -> 전체 다 돌아보는
    for (let beast of beasts) {
        if (beast == name) {
            return true;
        }
        isChecked = true;  // 반복문 끝까지 실행해서 있다는 의미
    }
    if (isChecked) {  // 반대되는 값. for 문 밖에 써야함
        return false;
    }
}

result = includes('bison'); 
console.log(result);



// join(구분자) : 배열 -> 문자 변경시키는 메소드
result = beasts.join("-").split('-');  // split은 다시 배열로
console.log(result);


// slice (시작인덱스, 종료인덱스 : 사이의 값 반환해 새로운 배열 만듦)
result = beasts.slice(0, 3);
console.log(result);
console.clear();

console.log(beasts);
// splice(위치인덱스, 대체할 요소 크기, 대체값) : 배열에 값 추가(push, unshift), 제거() pop, shift) 합친 것
// beasts.splice(beasts.length, 0, 'pig'); // 제일 마지막크기에 대체할크기 0 -> 단순 추가
//beasts.splice(0, 1, 'pig'); //0번째 인덱스 하나 pig로 대체 : ant -> pig 로 대체
beasts.splice(0, 2, 'bison', 'ant'); 
console.log(beasts);






