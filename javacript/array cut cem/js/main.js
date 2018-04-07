// ARRAY


var numbers = [5,8,11];
console.log(Sum(numbers));
function Sum(InputArray) {
    var SumOfEven = 0;
    for (var i = 0; i < InputArray.length; i++) {
        if (numbers[i] % 2 == 0) {
            SumOfEven += InputArray[i];
        }
    }
    return SumOfEven;
}
// YOXLAMA
for (var i = 0; i < numbers.length; i++) {
    if (numbers) {
        Sum(numbers);
    } else {
        alert("Duzgun Reqem Daxil Edin");
    }
}



