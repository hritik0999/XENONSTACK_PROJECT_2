function calculateSem1Result()
{
   
   return 23;

}

function calculateSem2Result()
{

   return "A";

}

function init()
{

   var result = '';
   result += calculateSem1Result();
   result += calculateSem2Result();
   return result;

}

   document.getElementById("result").innerHTML = init();
