
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
let b1 = new Book('제목1', '저자1', '다산북스', 7000);
let b2 = new Book('제목2', '저자2', '김영사', 9000);
let b3 = new Book('제목3', '저자3', '범우사', 8000);
let b4 = new Book('제목4', '저자4', '다산북스', 12000);
let b5 = new Book('제목5', '저자5', '김영사', 11000);
let b6 = new Book('제목6', '저자6', '범우사', 13000);


let books = []; // 6건 입력
books.push(b1);
books.push(b2);
books.push(b3);
books.push(b4);
books.push(b5);
books.push(b6);


function findBooks(press) {
//같은값 있으면

    for (let book of books ) {
        if (book = press) {
            return book
        }
    }
}

let result = findBooks("김영사");
console.log(result);