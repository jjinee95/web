// array4.js

let names = ["김도협", "채동윤", "민성인"];
names.push('권근희');
names.splice(names.length, 0, '김동견');
names.splice(names.length, 0, '이재현');
names.splice(names.length, 0, '이정용');
names.splice(0, 0, '김기훈');
names.splice(0, 0, '이소라');
names.splice(0, 0, '오수현');

console.log(names);

// prompt("이름입력: ")

let inval = prompt('이름입력: ')

function removeName(name) {
   for (name of names) {
        if (name == inval) {
            name.splice
        }
   } 
   
}
removeName(inval)





