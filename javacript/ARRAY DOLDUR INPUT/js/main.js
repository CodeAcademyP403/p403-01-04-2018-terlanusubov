var input = document.querySelector('#InputArray');
var submit = document.querySelector('#submit');
var ul = document.querySelector('.list-group');
input.focus();


submit.addEventListener("click", addNumber);

input.addEventListener("keydown", function(e){
    if(e.which == 13){
        addNumber();
    }
});

function addNumber(){
    var number = [];
    var n=0;
    for(var n=0;n<=5;n++){
        number.push(input.value);
    if (number) {
        var  li = document.createElement("li");
             li.innerHTML = number;
             li.classList.add("list-group-items");
 
             ul.appendChild(li);
             input.value = "";
             input.focus();
     }
    }

    alert("ARRAY DOLDU!");

    var max=number[0];
    for(var n=0;n<=number.length;n++){
        if(max<number[i]){
            max = number[i];
        }
    }

    var MaxNumber = document.createElement("div");
        MaxNumber.innerHTML = max;
        document.body.appendChild(MaxNumber);
        MaxNumber.style.width = "100px";
        MaxNumber.style.height = "100px";
        MaxNumber.style.color = "black";
        MaxNumber.style.textAlign = "center";
    
    
}