
// 책 : Book (제목 title, 저자 author, 출판사 press, 가격 price)
class Book {
    constructor(title, author, press, price) {
        this.title = title;
        this.author = author;
        this.press = press;
        this.price = price;
    }
}


//  출판사 다산북스, 김영사, 범우사
let b1 = new Book();


let books = []; // 6건 입력

function findBooks(press) {
//같은값 있으면
}

let result = findBooks("김영사");
console.log(result);