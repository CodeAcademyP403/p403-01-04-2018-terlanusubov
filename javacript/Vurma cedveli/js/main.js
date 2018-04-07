
var Vuruq = document.querySelector("#NumberOfMul");
var SubmitButton = document.querySelector("#Submit");

SubmitButton.onclick = function (){
     var MainNumber = Vuruq.value;
     var result = 1;

     for(var i = 1; i <= 10 ; i++ ){
         result = i * MainNumber;
         console.log(MainNumber + "*" + i + "=" + result);
     }
     
}
