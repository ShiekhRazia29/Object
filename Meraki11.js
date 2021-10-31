//You need to count the number of occurrences of each unique character of a word "MISSISSIPPI" and 
//store them in an object in key, value pairs.
var string='abcabc';
//var list1=(string)
let count={}
var list=[]
for(var i of string){
    if(list.includes(i)){
        count[i]=count[i]+1;

    }else{
        list.push(i)
        count[i]=1;
    }

}
console.log(count);
