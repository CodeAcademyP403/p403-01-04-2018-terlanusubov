

// ARRAY KVDARAT CEM

var numbers = [5, 8, 11];
console.log(Sum(numbers));
function Sum(InputArray) {
    var SumOfSquare = 0;

    for (var i = 0; i < InputArray.length; i++) {
        SumOfSquare += Math.pow(InputArray[i], 2);
    }
    return SumOfSquare;
}

for (var i = 0; i < numbers.length; i++) {
    if (numbers) {
        Sum(numbers);
    } else {
        alert("Duzgun Reqem Daxil Edin");
    }
}
