var myNumber = [11,12,14];
var sum = 0;
for(var i = 0; i < myNumber.length; i++){
   var element = myNumber[i];
   sum = sum + element;
   
}
console.log(`sum is: `, sum);

function listTotal(myNumber){
    var sum = 0;
    for(var i = 0; i < myNumber.length; i++){
    var element = myNumber[i];
    sum = sum + element;
   
    }
    return sum

}

var result = listTotal(myNumber);
console.log(result);

function biggest(num){
    var biggestNum = num[0];
    for(var i = 0; i <= num.length; i++){
        var element = num[i];
        console.log(element);
        if(element > biggestNum){
            biggestNum = element;
        }
    }
    return biggestNum;
}
num = [15,12,22,21,10,25,17]
var largestNum = biggest(num);
console.log(`largest number is:`, largestNum);

//  sum of total element in list 

function totalTotal(num){
    var sum = 0;
    for(var i = 0; i < num.length; i++){
        var element = num[i]
        sum = sum + element;
    }
    return sum;
}
var num = [11,12,15,15]
var add = totalTotal(num);
console.log(add)



