// multiple value array er modhye store korbe then sort korbe.
function myFunction() {
    const arr = [];
    for (let i = 0; i < 5; i++) {
        const number = 10 + (Math.random() * 20)// ("Enter the number")
        arr.push(Math.round(number));
    }
    return arr;
}
const result = myFunction()
console.log(result)

let unAble =0
votingEligble = (result, unAble) => {
    const able = []
    const notAble = []
    for (let i = 0; i < result.length; i++) {

        if (result[i] >= 18) {
            console.log(`${result[i]} is ready for voating`)
            able.push(result[i])
        }
        else {
            console.log(`${result[i]} is not ready for voating`)
            notAble.push(result[i])
        }

    }
    return [able,notAble];
}
const eligibleVoterarr = votingEligble(result,unAble)
console.log(`Eligible voter age ${eligibleVoterarr[0]} \nNot eligible voter age ${eligibleVoterarr[1]} \n`)
console.log(`${eligibleVoterarr[0].length} person are eligible gor voting`)