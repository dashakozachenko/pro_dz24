'use strict';

function palindrom (num){
    let step = 0;

    function findPalindrom (num) {
        const revNum = parseFloat(num.toString().split('').reverse().join(''));
        const result = num;

        if (num === revNum) {
            return {
                step,
                result
            };
        }else {
            step +=1
            return findPalindrom(num + revNum);
        }
    }
    return findPalindrom(num);
}

console.log(palindrom(96));
console.log(palindrom(213));