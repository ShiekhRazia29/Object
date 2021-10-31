let obj = {name:"Razia",age:23,current:"Pune",
}
// Accessing elements using dot notation
console.log(obj.name)
console.log(obj.age);
// Accessing elements using bracket notation
console.log(obj["name"])
console.log("age");
obj2 = {name:"sheetal",from:"Delhi"}

// obj.put("k","v")
// console.log(obj);
for(var i in obj){
    console.log(obj[i]);
}
let array =[3,5,8]
for(var i of array){   
    console.log(i);
}
