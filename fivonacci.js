var fibo =[0,1]
for(var i = 2; i <= 10; i++){
    fibo[i] = fibo[i - 1] + fibo[i - 2];

}
console.log(fibo);

function fibonacci(num){
    var fibo = [0,1];
    for(var i = 2; i <= num; i++){
        fibo[i]= fibo[i-1]+ fibo[i-2]
    }
    return fibo;
}
num = 10
var fiboNum = fibonacci(num);
console.log(`fibo is`, fibo);

// swap variables
var first = "Rafsan";
var second = "Samira";
console.log(first , second);
var temp = first;
first = second;
second = temp;
console.log(first , second);

// Q15: What code you have to write to know the number of “a” in a string

var sentence = "I am hardworking. I am determined. I will be a web developer.";
console.log(sentence.length)
var count = 0;
for(var i = 0; i < sentence.length; i++){
  var letter = sentence[i];
  if(letter == "a"){
    count++;
  }
}
console.log(count)
