//Write a programme to generate and print a dictionary that contains a
//number (between 1 and n) in the form (x, x*x).
var read=require("readline-sync")
var number=read.questionInt("Enter a number:")
dic={}
for(let j=0;j<=number;j++){
    dic[j]=j**2
}
console.log(dic);