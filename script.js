// approch 1
// function sayHello()
// {
//     console.log("hello");
//     // alert("hello");
// }
//
// sayHello();

// approach 2

// var x = function ()   // anonumus functions
// {
//     console.log("bye");
// }
//
// x();


// approach 3
// function sing(song) {
//     console.log(song);
// }
//
// sing("bagg bsdk");

// function muli(a, b) {
//     return a*b;
// }
//
// console.log(muli(2,5));

// function checkDriverAge() {
//
//     var age = prompt("What is your age?");
//
//     if (Number(age) < 18) {
//         alert("Sorry, you are too yound to drive this car. Powering off");
//     } else if (Number(age) > 18) {
//         alert("Powering On. Enjoy the ride!");
//     } else if (Number(age) === 18) {
//         alert("Congratulations on your first year of driving. Enjoy the ride!");
//     }
// }

// checkDriverAge();

// var checkDriverAge2 = function() {
//     var age = prompt("What is your age?");
//     if (Number(age) < 18) {
//         alert("Sorry, you are too yound to drive this car. Powering off");
//     } else if (Number(age) > 18) {
//         alert("Powering On. Enjoy the ride!");
//     } else if (Number(age) === 18) {
//         alert("Congratulations on your first year of driving. Enjoy the ride!");
//     }
// }
//
// checkDriverAge2();


// var array = ["Banana", "Apples", "Oranges", "Blueberries"];
// array.shift();
// array.sort();

// const index = array.indexOf("Apples");
// array.splice(index,1);

// array.push("Kiwi");
// array.reverse();


// console.log(array);
//
// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
//
// console.log(array2[1][[1][0]]);

// var database = [
//     {
//         username:"and",
//         password: "super"
//     }
// ];
//
// var newsFeed = [
//     {
//         username : "Bobby",
//         timeline:"so tired from all that learned"
//     },
//     {
//         username : "sally ",
//         timeline:"javascrip is amazing"
//     }
// ];
//
// var userNamePromt = prompt("what 's yoy username");
// var passwordPromt = prompt("what is your password");
//
// function signIn(user,pass) {
//     if(user == database[0].username && pass == database[0].password)
//     {
//         console.log(newsFeed);
//     }
//     else
//     {
//         alert("sorry , wrong username and password");
//     }
// }
//
// signIn(userNamePromt,passwordPromt );

// difference between fuction and method   how to call them

// var todos = [
//     "clean room",
//     "brush teeth",
//     "excersise",
//     "study javascript",
//     "eat healthy"
// ]
//
// for(var i = 0 ;i<todos.length ;i++)
// {
//     console.log(todos[i]);
// }
//
// todos.forEach(function (i) {
//     console.log(i);
//
// })

var newsFeed = [
    {
        username : "Bobby",
        timeline:"so tired from all that learned"
    },
    {
        username : "sally ",
        timeline:"javascrip is amazing"
    }
];
var database = [
    {
        username:"and",
        password: "super"
    },{
        username:"tushar",
        password: "777"
    },{
        username:"nitika",
        password: "222"
    }

];
function isUserValid(user,pass) {
    for (var i = 0; i < database.length; i++)
    {
        if(database[i].username == user && database[i].password == pass)
        {
           return true;
        }
    }

    return false;

}

function signIn(user,pass) {
    if(isUserValid(user,pass))
    {
        console.log(newsFeed);
    }
    else
    {
        alert("wrong id or password");
    }

}

var userNamePromt = prompt("what 's yoy username");
var passwordPromt = prompt("what is your password");

signIn(userNamePromt,passwordPromt);