//Count the values of an object property; mostly they contain lists as values.
var dict = {

    'Alex': ['subj1', 'subj2', 'subj3'],
    
    'David': ['subj1', 'subj2']
    
    }
count_values=[];
for(var i in dict){
    for(a in dict[i]){
        count_values++;
    }
}
console.log("Count of the values is",count_values);