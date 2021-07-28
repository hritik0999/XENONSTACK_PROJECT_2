
function sum()
{

    var firstNumber=document.getElementById("firstNumber").value;
    var secondNumber=document.getElementById("secondNumber").value;
    
    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);

    try
    {

    if(firstNumber < 0 || secondNumber < 0 )
    throw 0;


    else
    {
    console.log(firstNumber+secondNumber);
    document.getElementById("response").innerHTML=firstNumber+secondNumber;
    }
    }
    catch(e)
    {
        console.log("number entered are negative");
        document.getElementById("response").innerHTML="number entered are negative";
    }
}