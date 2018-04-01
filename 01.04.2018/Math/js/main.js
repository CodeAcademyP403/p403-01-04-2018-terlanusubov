var submitButton = document.querySelector('#submit');
var Number1Input = document.querySelector('#number1');
var Number2Input = document.querySelector('#number2');
var SelectInput = document.querySelector('#operation');
var resultInput = document.querySelector('#result');


function HuseynX(operation, n1, n2){
    if(operation == "add" )
    {
        return n1 + n2;
    }
    else if(operation == "subtract")
    {
        return n1 - n2;
    }
    else if(operation == "multiply")
    {
        return n1 * n2;
    }
    else if(operation == "divide")
    {
        return n1 / n2;
    }
}


submitButton.onclick = function(){
    var Number1Value = Number(Number1Input.value);
    var Number2Value = Number(Number2Input.value);
    var SelectValue = SelectInput.value;

    if(Number1Value && Number2Value && SelectValue)
    {
        resultInput.value = HuseynX(SelectValue, Number1Value, Number2Value);
    }
    else
    {
        alert("Bosluq daxil etmeyin.");
    }
} 

