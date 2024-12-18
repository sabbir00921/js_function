
// function myFunction(name){
//     for(let i=1; i<5; i++){
//         console.log("My name is " + name + " " +i)
//     }

// }

// myFunction("sabbir");
// const myArray = [2, 3, 6, null, NaN, [2, 3, 6, NaN]]
// function myFunction(InpurArray) {
//     for (let i = 0; i < InpurArray.length; i++) {
//         console.log(!InpurArray[i])
//     }

// }

// myFunction(myArray);

// object
// let cae ={ x="fghj",y="dtgyj",z="frt"} literal syntax
const car = {
    name: "volvo",
    model: "20hh",
    start: function () {
        console.log(this.model + " model " + this.name + " car Is the best car");
        this.drive();
    },
    drive: function () {
        console.log("The car is driving " + this.name);
    }

}
car.start();
console.log( car.name)