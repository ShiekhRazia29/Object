//Write a program to take 1 input and check whether given input exists in our object or not,
// if it exists print exists or else prints not exist
var read=require("readline-sync");
var exist_orNot=read.question("Enter the key you want to find in the object:")
dic={name:"razia",class:12,age:23}
for( i in dic){
    if(i==exist_orNot){
        console.log(" exists");
        break;
    }else{
        console.log("Doesn't exist");
        break
    }
}
