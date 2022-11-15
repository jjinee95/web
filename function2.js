

/*let numAry = [20, 25, 11, 34, 27, 52];
let sum = 0;
for (let i = 0; i < numAry.length; i++) {
    
    sum += numAry[i];
    
    console.log(`sum: ${sum}, numAry: ${numAry[i]}`)
}
console.log(`합계값은 ${sum}`)

sum = 0;
for (let num of numAry) {
    sum += num;
}
console.log(`합계값은 ${sum}`) */    


let numAry = [20, 25, 11, 34, 27, 52];
let sum = 0;
for (let i = 0; i < numAry.length; i++) {
    if (numAry[i] % 2 == 0) {
    sum += numAry[i];
    }
    console.log(`sum: ${sum}, numAry: ${numAry[i]}`)
}
console.log(`짝수 합계값은 ${sum}`) 


sum = 0;
for (let num of numAry) {
    if (num % 2 == 1 ) {
        sum += num;
}
}
console.log(`홀수 합계값은 ${sum}`)





let numAry2 = [11, 22, 33]

//배열의 요소들의 합을 반환하는 함수 만들기 --> 반복되는 코드 줄임

function sumArray(ary) {
    let sum = 0;
    for (let i = 0; i < ary.length; i++) {
        sum += ary[i];
    }
    return sum;
}

let result = sumArray(numAry2);
console.log(`numAry2의 합계: ${result}`);  //변수는 ${}안에


result = sumArray(numAry);
console.log(`numAry의 합계: ${result}`); 




function evenSum(ary) {
    //배열 요소중에서 짝수값을 합산하는 함수 만들기
    let sum = 0;
    for (let num of ary) {
        if (num % 2 == 0) {
        sum += num;
        }
    }
    return sum;
}

result = evenSum(numAry);
console.log(`numAry의 짝수값 합계: ${result}`);  





/*매개 값으로 받는 두개 중 큰 값 반환

function maxVal(first, last) {
    if (first > last) {
        return first;
    } else {
        return last;
    }
}

result = maxVal(23, 55);
console.log(`두 수중에서 큰값은 ${result}`) 



function maxVal(first, last) {
    let max;
    if (first >= last) {
        max = first;
    } else {
        max = last;
    }
    return max;
}

result = maxVal(23, 55);
console.log(`두 수중에서 큰값은 ${result}`) */




// 세개중 큰값 반환
function maxVal(first, mid, last) {
    if (first > mid) {
        if (first > last) {
            return first;
        }else {
            return last;
        }
    }else {
        if (mid > last) {
            return mid;
        } else {
            return last;
        }
    } 
}
result = maxVal(11, 25, 36)
console.log(`세 수중에서 큰값은 ${result}`)







