const number = 3.00019146;
var num = Math.ceil(number);
console.log(num);

const number2 = 2.0001201516;
var num2 = Math.floor(number2);
console.log(num2);

const numb = 3.6536;
var rounded = Math.round(numb);
console.log(rounded);

const numb2 = -5;
var  num= Math.abs(numb2);
console.log(num);

var randomNum = Math.random()*6
var randomNumber =Math.floor(randomNum);
console.log(randomNumber);


console.log(`guessing game`);

var myRandom = Math.random()*6;
var myFloorNum = Math.floor(myRandom);
console.log(`random is: `, myFloorNum)

userNum = 5;
console.log(`user number is: `,userNum);
if(userNum == myFloorNum){
    console.log("CONGRARTES , YOU WIN");
}
else{
    console.log("you loos the game");
}

var myNum = -7 ;
var result = Math.abs(myNum);
console.log(result);

var myNum = 3.4589;
var result = Math.ceil(myNum);
console.log(result);

var myNum = 2.99001435;
var result = Math.floor(myNum);
console.log(result);

var myNum = 3.1452;
var result = Math.round(myNum);
console.log(result);

var randomNumb = Math.random()*6;
myRandom = Math.floor(randomNumb)
console.log(myRandom);

// swap variable
var first = 5;
var second = 7;
console.log(first, second);
var temp = first;
first = second;
second = temp;
console.log(first, second);

// [first ,second] = [second,first];
// console.log(first,second);

var num1 = 5;
var num2 = 6;
var num3= 7;
var boro =[num1,num2,num3];
var  maximum = Math.max(boro);
console.log(maximum);

var businessMan = 1506;
var doctorMan = 1705;
var ministerMan = 1250;
if(businessMan > doctorMan &&  businessMan > ministerMan){
    console.log("business man is bigger");
} 
else if(doctorMan > businessMan && doctorMan > ministerMan){
    console.log("doctor is the bigger");
}
else{
    console.log("minister man is bigger");
}

function findLargest(first,second){
    if(first > second){
        return first;
    }
    else{
        return false;
    }
}
var result = findLargest(250,125);
console.log(result);

function findLargest(first,second,third){
    if(businessMan > doctorMan && businessMan > ministerMan){
        return businessMan;
    }
    else if(doctorMan > businessMan && doctorMan > ministerMan){
        return doctorMan;
    }
    else{
        return ministerMan;
    }
}

var result = findLargest(businessMan,doctorMan,ministerMan);
console.log(" largest number is :", result);

var numberList = [12,15,17,11,10,18];
var sum = 0;

for(var i = 0; i <= numberList.length; i++){
    var element = numberList[i];
    sum = sum + element;
}
console.log(sum);

// function arrayTotal(numberList){
//     sum = 0;
//     for(var i = 0;  i <= numberList.length; i++){
//         var elements = numberList[i];
//         sum  = sum + elements;
//     }
//     return sum;
// }

// var totalResult = arrayTotal(numberList);
// console.log(totalResult);
// task :2 to get smallest number create a function that input as a 3 three parameters and you will return number 
