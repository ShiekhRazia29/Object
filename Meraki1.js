var d1 = {'a': 100, 'b': 200, 'c':300}
var d2 = {'a': 300, 'b': 200, 'd':400}
var dic1={}
var dict={}
for(i in d1){
    for(j in d2){
        if(i===j){
            d1[i]=d1[i]+d2[j]
            break;
            
        }else{
            dic1[i]=d1[i]
            dic1[j]=d2[j]
        }
    }
    for(i in dict){
        dic1[i]=dict[i]

    }
}
console.log(dic1);

let objectLength = Object.values(d1).length
console.log(objectLength);