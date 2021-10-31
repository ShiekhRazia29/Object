//Take 10 student inputs and marks and save them in an object
var readline=require("readline-sync")
var dict={}
for(let i=0;i<=10;i++ ){
    var name=readline.question("Enter the student name:");
    var marks=readline.questionInt("Enter the marks:");
    dict[name]=marks;

}
console.log(dict);