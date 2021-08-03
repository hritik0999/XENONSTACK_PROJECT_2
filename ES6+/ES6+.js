

//     // let and const

//     if(true)    //var dont give us block scoping
//     {
//         var myName= "hritik";
//     }

//     console.log(myName);


//     if(true)    //let give us block scoping in javascript
//     {
//         let age= 21;
//         age=22;
//         console.log(age);        
//     }

//     console.log(age);

//     // also we may change the value of let variable

//     // for example 




//     // const

//     const mage = 27;

//     // mage=29; we cannot do this 

//     console.log(mage);


//     // but if we make a const array and try to push some new value to it ,it will do it

//     const AGES =[1,2,3];

//     console.log(AGES);

//     AGES.push(9);

//     console.log(AGES);



//     //hoisting with let and const

//     numbers = 21;

//     console.log(numbers);

//     var numbers;
    

//     //this will work but if we use let or const it will not work like this


//     // numbers = 21;

//     // console.log(numbers);

//     // let numbers;

//     //this will throw an error



//                                                             //fat arrow functions

// function fn()
// {

//     console.log("hello");

// }                                                            

// fn();

//                                                             //this is syntax of fat arrow function

// var fn = () => {

//     console.log("hello");

// }

// fn();

//                                                             // if i have only one line of code then the way to write this is shorter


// var fn = () => console.log("hover"); 

// fn();


//                                                 // if i have only one line of code and return one line of code then


// var fn = () => "hello world";

// console.log(fn());


//                                                 //if i pass arguments to this functions

// var fn = (a,b) => a+b;

// console.log(fn(5,3));


//                                                 //if i have only one argument

// var fn = a => a+6;
// console.log(fn(3));                                                


//                                                 //helpful in callback functions

// setTimeout(()=>console.log("hello friends"),1000);                                                




//                                                 //default parameter


// function isEqualTo(number,compare = 0)
// {

//     return number == compare;

// }                            

// console.log(isEqualTo(10));


//                                                 //object literal extentions


// yname = "hritik";
// yage = 21;

// let obj = {

// yname,
// yage,

// "greet"()
// {

//     console.log(this.yname + " "+this.yage);

// }

// };       

// obj["greet"]();



//                                             //the rest operator



// function sumUp(...add)
// {

//     console.log(add);
//     let result = 0;

//     for(let i = 0 ; i < add.length ; i++)
//     {

//         result = result+add[i];

//     }
//     return result;
// }                                            

// console.log(sumUp(100 , 10 , 20));



                                                //the spread operator


// let mynumbers = [1,2,3,4,5];

// console.log(...mynumbers);

// console.log(Math.max(...mynumbers));


                                                //the for of loop

// let testResults = [1,1.5,1.9];

// for(testResult of testResults)
// {

//     console.log(testResult);

// }

                                                // template litereals



// let yourName ="hritik";

// let description = `

// my name is ${yourName}

// `;

// console.log(description);


                                                //destructuring arrays


// let numbers = [1,2,3];

// let [a,b] = numbers;

// console.log(a);

// console.log(b);


// // swap

// [b,a] = [a,b];

// console.log(a);
// console.log(b);

// //can also do like this

// let [c,d] = [1,2,4];

// console.log(c);

// console.log(d);


                                            //destructuring object

  let obj = {

    nickname : "hritik",
    
    age : 21

  } ;                                         

  let {nickname ,age: yourAge} = obj;

  console.log(nickname,yourAge);