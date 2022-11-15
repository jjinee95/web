
// object => {name: "홍길동", age: 20, showInfo: function() {...}}
// name, age = 속성. 속성 중 기능 정의 된 것 function = 메소드 
// 객체 : 속성(필드: 값), 메소드(기능). 값과 기능 묶은 것

const member = {
    memberId: "user1",
    memberName: "홍길동",
    memberInfo: function() {
        return `아이디는 ${this.memberId}이고 이름은 ${this.memberName}`;  //객체 안에서 불러올 때는 this
    }
}

console.log(member.memberId);
console.log(member.memberName);
console.log(member.memberInfo()); // 함수호출 메소드호출 ()


// 객체의 속성을 반복하면서 반환해주는 for 문  : for.. in..
//memer.memberId, member["memberId"]
for(let prop in member) {
    console.log(prop, member[prop]);
    if(prop == 'memberInfo') {
        console.log(member[prop]());
    }
}



// for..of.. : 배열 반복. (for..in..은 객체 속성)

const members = [
    {memId: "user1", memName: "홍길동", memPoint: 88},
    {memId: "user2", memName: "김민규", memPoint: 55},
    {memId: "user3", memName: "황석하", memPoint: 100}
];

// for..of 배열 개수 만큼 반복
for (let member of members) { // 바깥 for of 데이터 건수 만큼 반복
    if(member.memPoint > 80) {

        for (let prop in member) { //안쪽 for in 속성 갯수 만큼 반복
            if (prop == 'memName') {
            console.log(`속성: ${prop}, 값: ${member[prop]}`);
            }
        }
    console.log('===================================')
    }
}