/*var name= 'Max';
var age = 29;
var hasHobbies = true;


//arrow function
const summarizeUser = (userName, userAge, userHasHobby) => {
    return(
        'Name is ' +
        userName +
        ', age is ' + 
        userAge + 
        ' and the user has hobbies: ' + 
        userHasHobby
    );   
}

console.log(summarizeUser(name, age, hasHobbies));*/

//Objects
//Arrays
//array using map
//Referene type

const person = {
    name: 'Max',
    age: 29,
    greet(){
        console.log('Hi, I am' + this.name);
    }
};

const hobbies = ['Sports' , 'Cooking'];
//for(let hobby of hobbies){
//    console.log(hobby);
// }
console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
console.log(hobbies);