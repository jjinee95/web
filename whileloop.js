
//for 문 식으로 while 쓰기
/*let i = 0
while(i < 10){
    console.log(i);
    1++;
}
console.clear();*/

//while 문 조건식만 들어감. 어떤 조건이 되면 반복문 종료
let isOK = true;
while (isOK) {
    let randomVal = parseInt(Math.random() * 10);
    console.log(randomVal);
    if (randomVal % 2 == 0){
        break; //반복문 종료.
    }
}
console.log('end of while');

console.clear();


let sum = 0;
while (isOK) {
    sum += parseInt(Math.random() * 10);
    console.log(sum)
    if(sum>100) {  //계속 반복 시키다 누적값 100 넘어서면 종료
        break;
    }
}
console.log('end of while');


/* while (true) {
    let msg = prompt("문자입력하세요: ")  // prompt 창 띄우는 메소드
    console.log(msg)
    if(msg == "stop") {
        break;
    }
} */

1
// Math.random => 0 ~ 3 까지의 임의 수 생성 => randomval 라는 변수에;
// prompt("숫자를 입력: ")

/* let randomval = parseInt(Math.random() * 3);
while (true) {
    let msg = prompt("숫자를 입력: ")
    console.log(msg)
    if(msg == randomval) {
        break;
    }
}
console.clear(); */

// Math.random => 0 ~ 100 까지의 임의 수 생상. => randomval;
// prompt("숫자를 입력: ") => inputaval;
// 입력한 값이 임의의 값 큽니다.

let randomval = parseInt(Math.random() * 100);
while (true) {
    let inputval = prompt("0~100 사이의 숫자를 입력하세요: ");
    if (randomval > inputval) {
        console.log("입력한 값이 임의의 값보다 작습니다");
    } else if (randomval <inputval) {
        console.log("입력한 값이 임의의 값보다 큽니다");
    } else {
        break;
    }
}