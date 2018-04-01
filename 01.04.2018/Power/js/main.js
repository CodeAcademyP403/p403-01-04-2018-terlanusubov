// var base = Number(prompt("Quvvet altini daxil edin: "));
// var power = Number(prompt("Quvvet ustunu daxil edin: "));

// var i = 1, result = 1;

// while(i <= power)
// {
//     result *= base;
//     i++;
// }

// console.log(`${base}-in ustu ${power} ${result}-a beraberdir`);


// function logger()
// {
//     console.log(firstname + " " + surname);
// }


// logger("Samir", "Dadash-zade");
// logger("Elnur", "Kerimov");
// logger("Vaqif", "Sabanov");


function quvvetUstu(base, power)
{
    var i = 1, result = 1;

    while(i <= power)
    {
        result *= base;
        i++;
    }

    return result;
    // console.log(`${base}-in ustu ${power} ${result}-a beraberdir`);
}

function math(operationType, n1, n2){
    
}

// var result1= quvvetUstu(5,3);
// quvvetUstu(4,5);

// alert("10-un ustu 2 "+ quvvetUstu(10,2) +" beraberdir");
// console.log(result1);

var submitButton = document.querySelector("#submit");
var baseInput = document.querySelector("#base");
var powerInput = document.querySelector("#power");
var resultInput = document.querySelector("#result");

var select = document.querySelector("#operation");

submitButton.onclick = function(){
    console.log(select.value);
    // var baseValue = baseInput.value;
    // var powerValue = powerInput.value;

    // if(baseValue && powerValue)
    // {
    //     resultInput.value = quvvetUstu(baseValue, powerValue);
    // }
    // else{
    //     alert("Bos buraxma!!!");
    // }
}


