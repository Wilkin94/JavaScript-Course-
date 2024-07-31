/**     ************************ LOOPS *********************
 * 
 * 
 * 
 * 
 * 
 * *********************** WHILE LOOP *************************
let count = 1

while (count <=100) {
    console.log(count)
    count = count + 1;
}

*/

/*
*************************** FOR LOOP **************************
for (let i = 0; i < 100; i++) {
    console.log (i + 1)
}

*/

/*

******** IF LOOPS TAKE PRIORITY OVER ELSE AND ELSE IF'S *************

/** Write a for-loop that lopps through 1 to 20
 * if the number is divisible by 3, print "Frontend"
 * if the number is divisible by 5, print "Simplified"
 * if the number is divisible by 3 and 5, print "Frontend Simplified"
 * if the number is *not* divisible by 3 and 5, print the number
 * 
 * @example
 * 1 -> 1
 * 2 -> 2
 * 3 -> "Frontend"
 * 4 -> 4
 * 5 -> "Simplified"
 * ...
 * 15 -> "Frontend Simplified"
 * ...
 * 20 -> "Simplified"
 */
/*



for (let i = 1; i <= 20; ++i) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} Frontend Simplified`)
    }
    else if (i % 3 === 0) {
    console.log(`${i} Frontend`)
    }
    else if (i % 5 === 0) {
    console.log(`${i} Simplified`)
    }
    else {
        console.log(`${i} -> ${i}`)
    }
}
*/

/** Print out every character from the string:
 * "Frontend Simplified"
 *
 * @example
 * 'F'
 * 'r'
 * 'o'
 * 'n'
 * ...
 * 'e'
 * 'd'
 */
/*

const str = "Frontend Simplified"

for (i = 0; i < str.length; ++i) {
    console.log(str[i])
}
*/

/*************************** FUNCTIONS ********************************/

// DRY - Don't Repeat Yourself

//console.log ("Welcome to FES. Wilkin")
//console.log ("Welcome to FES. Melvin")
//console.log ("Welcome to FES. Jailene")

// Function Definition
/*
function welcomePersonToFES (name) {
    console.log(`Welcome to FES,  ${name}`)
    
}

// Call the Function
welcomePersonToFES(`wilkin`);
welcomePersonToFES(`melvin`);
welcomePersonToFES(`jailene`);
*/

/***************************** REUTURN FUCTIONS ***************************/

/*function fn() {
    return 5
    console.log (`my function`)
}

console.log(fn());

function sumOfTwoNumbers() {
    return 5 + 10 
}

console.log(sumOfTwoNumbers())
*/

/** Create a function that converts Celcius to FaHrenheit
 * 
 * Celcius to FahrenHeit formula:
 *  F = c x 1.8 + 32
 * 
 * 
 *@example
 *convertCelciustoFahrenheit(0) -> 32
 *convertCelciustoFahrenheit(0) -> 50
 *convertCelciustoFahrenheit(0) -> 86
 

 function convertCelciustoFahrenheit(celcius) {
    return celcius * 1.8 + 32
 }

 console.log(convertCelciustoFahrenheit(0));
 console.log(convertCelciustoFahrenheit(10));
 console.log(convertCelciustoFahrenheit(30));

 */

//**************** ANOTHER WAY TO DO IT ***********/

//const convertCelciustoFahrenheit = (celcius) => {
//return celcius * 1.8 + 32
// }

//console.log(convertCelciustoFahrenheit(0))
// console.log(convertCelciustoFahrenheit(10))
// console.log(convertCelciustoFahrenheit(30))

/***************************** ARRAYS ***************************/

//let arr = [20, 30, 40, 50, 100]

// First Element of Array:
//console.log(arr[0])

//Last Element of Array
//console.log(arr[4])

// OR

//console.log(arr[arr.length - 1])

// how to add elements to end of array:

//arr.push (200)

//console.log(arr)

//****************** how to use array filter method ****************/

/*
let arr = [20, 30, 40, 50, 100]

arr.filter((element) => {
    //console.log(element)
})

 how to return a new ARRAY:

let arr = [20, 30, 40, 50, 100]

 [20, 30, 40, 50 ,100]
let newARR = arr.filter((element) => {
    console.log(element)
    if (element < 50) {
        return true;
    }
})

console.log(newARR)


/**
 * Filter out all the 'FAIL' elements in an array
 * 
 * @example
 * ['A+', 'A', 'FAIL'] => ['A+', 'A']
 * ['FAIL', 'FAIL', 'B'] => ['B']
 * ['FAIL'] => []
 */

/*
let grades = ['A+', 'A', 'FAIL']

let goodGrades = grades.filter (element => element !== 'FAIL')

console.log(goodGrades)

// another way to do it


let grades = ['A+', 'A', 'FAIL']

// Create a new empty array called `goodGrades`

 for (let i = 0; i < grades.length; ++i) {
    //add the current element onto `goodGrades` only if
    //the current element is not equal to `FAIL`
    console.log(grades[i])
 }

 // console.log `goodGrades`



 let grades = ['A+', 'A', 'FAIL']
 let goodGrades = []

 for (let i = 0; i < grades.length; ++i) {
    if (grades[i] !== `FAIL`){
        goodGrades.push(grades[i]);
    }
 }

 console.log(goodGrades);


 /**
  * Turn each element in an array of dollars into cents
  * 
  * @example
  * [ 1, 5, 10, 3] => [100, 500, 1000, 300]
  * [ 0, 10, 20] => [ 0, 1000, 2000]
  */
/*
let dollars = [ 0, 10, 20];

let cents = [];

for (let i = 0, i < dollars.length, i++) {
    cents.push(dollars[i] * 100)
}

console.log(cents)


  // ******************** OBJECTS *************************
  
// how to add multiple multiple properites into an object

let username = 'wilkin94'
let email = 'wilkinanthony94@gmail.com'
let password = 'Shagadelic@01'
let subscriptionStatus = 'VIP'
let discordId = 'WilkinAnthony'
let lessonsCompleted = [0, 1]

  let user = {
    username: 'wilkin94',
    email: 'wilkinanthony@gmail.com',
    subscriptionStatus: 'vip',
    discordId: 'WilkinAnthony',
  }

  console.groupCollapsed(user.username)
  


  // how to add users

  let users = [{
    username: 'wilkin94',
    email: 'wilkinanthony@gmail.com',
    subscriptionStatus: 'vip',
    discordId: 'WilkinAnthony',
    lessonsCompleted: [0, 1]
  },{
        username: 'mevlin94',
        email: 'melvin@gmail.com',
        subscriptionStatus: 'vip',
        discordId: 'MelvinAmador',
        lessonsCompleted: [0, 1, 2, 3]
      }
]

console.log(users[0].lessonsCompleted.map(elem => elem * 2))



// how to log a user into your application

let users = [
    {
    username: 'wilkin94',
    email: 'wilkinanthony@gmail.com',
    password: 'Shagadelic@01',
    subscriptionStatus: 'vip',
    discordId: 'WilkinAnthony',
    lessonsCompleted: [0, 1]
  },
  {
        username: 'mevlin94',
        email: 'melvin@gmail.com',
        password: 'melvin123',
        subscriptionStatus: 'vip',
        discordId: 'MelvinAmador',
        lessonsCompleted: [0, 1, 2, 3]
      },
      {
        username: 'jailene96',
        email: 'jailene@gmail.com',
        password: 'jailene123',
        subscriptionStatus: 'vip',
        discordId: 'JaileneAmador',
        lessonsCompleted: [0, 1, 2, 3]
      }
]

function login(email, password) {

    for (let i = 0; i < users.length; ++i) {
    if (users[i].email === email) {
        console.log(users[i]);
        if (users[i].password === password) {
            console.log('log the user in - details are correct')
        }
        else {
            console.log('passwprd is incorrect - try again')
        }
        return;
    }
    }
    console.log('could not find the email that matches')
}

login('thiswilkinanthony94@gmail.com', 'Shagadelic@01');



/**
 * Create a register function that accepts:
 *  - username
 *  - email
 *  - password
 *  - subscriptionStatus
 *  - discordId
 *  - lessonsCompleted
 *
 * inside your register fuction:
 * 1. create a user object
 * 2. push this user object onto the 'users' array
 */

// function
/*
function register(user) {
    users.push(user);
}

// argument
register({
  username: "wilkin94",
  email: "wilkinanthony94@gmail.com",
  password: "Shagadelic@01",
  subscriptionStatus: "VIP",
  discordId: "WilkinAnthony",
  lessonsCompleted: [0, 1]
});

console.log(users);
*/


// result: 
// we converted these 6 aruguments (register "console.log")
// into an object ({let user =})
// inside of the fuction 


// ************************* DOM "Document Objuect Model"********************
/*
// HOW TO CHANGE YOUR HTML

// First way of accessing an element
console.log(document.querySelector('.title'));

// Second way of accessing an element
console.log(document.getElementById('title'));


// HOW TO CHANGE YOUR CSS

//document.querySelector('h1').style.color = 'red'
document.querySelector('h1').style.fontSize = '50px'


// FOR THE BUTTON ONLY
// HOW TO CHANGE THE BUTTON TO RED ONLY WHEN WE CLICK IT

//ADD A ONCLICK TAG THE THE BUTTON ELEMENT ON THE INDEX.HTML
//CREAT A FUNCTION TARGETING THE CLASS
//INPUT DOCUMENT.QUERYSELECTOR('H1)
//ETC.

function changeTitleToRed() {
    document.querySelector('h1').style.color = 'red'
}
    */

function toggleDarkMode() {
    document.querySelector('body').classList.toggle("dark-theme")
}