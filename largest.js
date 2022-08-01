// var number = [ 12,15,10,9,11,16,6]

function largestNumber(number){
    var largest = number[0];
    for(var i = 0; i <number.length; i++){
        var element = number[i];
        if(element>largest){
            largest = element;
        }
    }
    return largest;
}
number =[12,15,10,9,11,16,6]
var biggestNumber = largestNumber(number);
console.log(`largest number is` ,  biggestNumber);

function findLargest(num){
    var largest = num[0];
    for(var i = 0; i <= num.length; i++){
        var elementNum = num[i];
        if(elementNum > largest){
            largest = element;
        }
    }
    return largest;
}
findLargest([-5 ,-3,-7,-4]);

var fibo =[0,1];
for(var i = 2; i<=10; i++){

    fibo[i] = fibo[i-1] + fibo[i-2]
}