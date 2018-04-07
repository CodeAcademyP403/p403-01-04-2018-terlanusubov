

var numbers=[5,8,11];
console.log(Multipication(numbers))
function Multipication(InputNumbers){
    var mul = 1;
    for(var i = 0 ; i < InputNumbers.length ; i++){
        mul = mul * InputNumbers[i];
    }
    return mul;
}

for(var i = 0 ; i < numbers.length ; i++){
    if(numbers){
        Multipication(numbers);
    }else{
       console.log("Duzgun Reqem Daxil Edin!"); 
    }
}

