// const arr = [3, 4, 6, 7, 11, 9, 5, 22]
// function FilterPrime(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let isPrime = true;
//         for (let j = 2; j <= arr[i] / 2; j++) {
//             if (arr[i] % j === 0) {
//                 isPrime = false;
//             }
//         }
//         if(arr[i]>1 && isPrime){
//             console.log(arr[i]);
//         }
//     }
// }
// FilterPrime(arr)

const arr = [3, 4, 6, 7, 11, 9, 5, 22]
const arr2 = [3, 4, 6, 7, 11, 9, 5, 22,13,43,87,3214,8]

function FilterPrime(arr) {
    for (let i = 0; i < arr.length; i++) {
        let isPrime = true;
        for (let j = 2; j <= arr[i] / 2; j++) {
            if (arr[i] % j === 0) {
                isPrime = false;
            }
        }
        if (arr[i] > 1 && isPrime) {
            console.log(arr[i]);
        }
        // else{
        //     console.log(arr[i]+"is not prime number")
        // }
    }
}
FilterPrime(arr)
console.log("@nd array")
FilterPrime(arr2)


