// Write a program to print count a substring in a Main string.
var mainString=["My", "name", "is", "kumar", "and", "my", "friend’s","name", "is", "Dhamu"]
var subString="is"
count=0
for(let i in array){
    if(mainString[i]=="is"){
    count=count+1
    }
}

console.log("The substring ",count," times in mainString");
