

let str = "Hello, World"; //string => String
console.log(str.length);

console.log(str.substring(0, 5)) // (시작 인덱스, 종료인덱스) 0과 5 사이의 문자열 반환 --> Hello 
console.log(str.substring(5)) // 하나만 있으면 5 이후 다 반환 --> , World
// indexOf(값) => 일치하는 첫 번째 index 값 반환. 없으면 -1 반환
console.log(str.indexOf(",")) // --> , 인덱스 값 5
console.log(str.indexOf("Wor")) // --> 첫번째 index W의 값 7

console.log("Hello, World. Nice World" .lastIndexOf("World")) // last 역순으로 찾음 -->  19

    


// split(구분자) => 구분자 기준으로 배열로 변환

let temp = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, cumque. At aperiam aliquid odio eos voluptas laudantium? Quos aspernatur eveniet assumenda eos incidunt, mollitia, rerum est praesentium maxime, earum dicta."

let strAry = temp.split(" "); // 스페이스바 기준으로 나눔
//console.log(strAry);

for (let word of strAry) {
    if (word.indexOf("m")  != -1) {    // -1 아니면 일치하는 값 있
        console.log(word);
    }
}


// charAt(인덱스) : 단일 문자 반환
console.log(str.charAt(5)); //---> ,


// 찾을 이름을 입력하면 나이를 반환.ㅇㅇ
let persons = [{name: "홍길동", age: 20},
               {name: "박혜진", age: 21},
               {name: "문민희", age: 22},
               {name: "이가영", age: 23}
              ];

function findPerson(name) {
    for (let person of persons) {
        if (person.name.indexOf(name) != -1) {
            return person.age; 
        }
    }
    //console.log("찾는 이름이 없습니다.") 
    return "찾는 이름이 없습니다.";
}             

//let findName = prompt("이름을 입력하세요")
//let result = findPerson(findName)
let result = findPerson("박혜진")
console.log(result);