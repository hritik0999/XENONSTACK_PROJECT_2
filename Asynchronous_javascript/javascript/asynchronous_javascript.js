function showTimer(){

    var time="00:01:00";
    timerDiv=document.getElementById("timerDiv");
    applyCSS(timerDiv);
    timerDiv.innerHTML=time;
    
    myTimer=setInterval(function()
    {
        var hr=0;
        var min=0;
        var sec=0;
        var timeUpNow=false;

        splitedString=time.split(":")

        hr=parseInt(splitedString[0]);
        min=parseInt(splitedString[1]);
        sec=parseInt(splitedString[2]);
        
        if(sec==0)
        {

            if(min>0)
            {

                sec=59;
                min--;

            }

            else if(hr>0)
            {

                min=59;
                sec=59;
                hr--;

            }

            else
            {

                timeUpNow=true;

            }


        }

        else
        {

            sec--;

        }

        if(hr<10)
        hr="0"+hr;

        if(min<10)
        min="0"+min;

        if(sec<10)
        sec="0"+sec;

        time=hr+" :"+min+" :"+sec;

        if(timeUpNow)
        {

           time="TIME UP";


        }

        timerDiv=document.getElementById("timerDiv");
        timerDiv.innerHTML=time;

        if(timeUpNow)
        {
        clearInterval(myTimer);
        timerDiv.style.backgroundColor="red";
        timerDiv.style.color="white";
        }

    },1000);

}

function applyCSS(timerDiv)
{
    timerDiv.style.fontSize="22px";
    timerDiv.style.border="2px solid green";
    timerDiv.style.fontWeight="bold";
    timerDiv.style.width="150px";
    timerDiv.style.padding="10px";
    timerDiv.style.textAlign="center";
}


function fetchCities(yourState)
{

    // alert(yourState); 
    var request = new XMLHttpRequest();

    request.open("get","http://localhost/Asynchronous_javascript/php/asynchronous_javascript.php?state="+yourState,true);

    request.send();

    request.onreadystatechange = function()
    {

        if(request.readyState == 4 && request.status == 200)
        {

            document.getElementById("selectcity").innerHTML = request.responseText;

        }

    };

}