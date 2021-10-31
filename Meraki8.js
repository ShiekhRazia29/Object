//Take two lists and make an object, 1st list elements be as keys, and 2nd lists elements as values.
var list1=['one','two','three','four','five']
var list2=[1,2,3,4,5]
dict={}
for(i in list1){
    dict[list1[i]]=list2[i]
}
console.log(dict);