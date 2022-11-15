        console.log("Hello, World"); //콘솔탭에 출력.
        let name; // 변수선언
        name = "박혜진" // 변수에 값을 할당 문자열(string 타입)은 " " ' ' 사용
        console.log(name);
        let age = 20; // number 타입
        console.log(age)
        console.log("이름은 " + name + "이고, 예전 나이는 " + age + "입니다.")     
        
        let marriage = true; // bollean 타입
        console.log("결혼여부는 " + true)
        marriage= false;

        console.log(typeof name)
        name = true; 
        console.log(typeof name)

        // 상수 선언, 한번 선언 되면 변경X
        const gender = "Men"
        // gender = "woman"
        
        // 변수 : name1 <= 이름 height : 키 weight : 몸무게
        // 이름은 ??? 이고 키는 ?? 이고 몸무게는 ?? 입니다
        let name1 = "홍길동";
        let height = 167.8;
        let weight = 63.2;

        console.log("이름은 " + name1 + "이고, 키는 " + height + "이고, 몸무게는 " + weight + "입니다.")
        
        //조건식
        let averageHeight = 165;
        if (height > averageHeight) {
            console.log(name1 + "의 키가 "+ averageHeight +"보다 큽니다.")
        }

        //연산식 (+, -, *, /)
        let weight1 = 66.3;
        let weight2 = 60.4;
        let weight3 = 64.2;
        let averageWeight = (weight1+weight2+weight3)/3
       
        // 홍길동의 몸무게는 평균 63.6보다 적습니다.
        console.log(name1 + "의 몸무게는 평균 " + averageWeight.toFixed(2) + "보다 적습니다." )