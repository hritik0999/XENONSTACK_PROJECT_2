

    // let and const

    if(true)    //var dont give us block scoping
    {
        var myName= "hritik";
    }

    console.log(myName);


    if(true)    //let give us block scoping in javascript
    {
        let age= 21;
        age=22;
        console.log(age);        
    }

    console.log(age);

    // also we may change the value of let variable

    // for example 










    // const

    const mage = 27;

    // mage=29; we cannot do this 

    console.log(mage);


    // but if we make a const array and try to push some new value to it ,it will do it

    const AGES =[1,2,3];

    console.log(AGES);

    AGES.push(9);

    console.log(AGES);



    //hoisting with let and const

    numbers = 21;

    console.log(numbers);

    var numbers;
    

    //this will work but if we use let or const it will not work like this


    // numbers = 21;

    // console.log(numbers);

    // let numbers;

    //this will throw an error