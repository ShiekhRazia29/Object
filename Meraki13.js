//Write a programme to find the 3 maximum values of an object and print them.
var my_dict = { 'a':50, 'b':58, 'c':56, 'd':40, 'e':100, 'f':20 }
first_max=0
second_max=0
third_max=0
three_max=[]
for(var i in my_dict){
    if(my_dict[i]>first_max){
        first_max=my_dict[i];
    }
    else if(second_max<first_max && my_dict[i]>second_max){
        second_max=my_dict[i]

        
    }else if(third_max<second_max && my_dict[i]>third_max){
        third_max=my_dict[i]

    }
  
}
three_max.push(first_max,second_max,third_max) 

console.log(three_max);
