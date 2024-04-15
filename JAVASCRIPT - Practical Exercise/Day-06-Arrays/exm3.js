// using forEach() and fat arrow in arrays.


/*let myfav = ['Bob the builder','Power of girls','Dextors laboratory','Hanna montena','Sweet life of jack and cody']

myfav.forEach(function(elements,index,array){
     console.log(elements + 'index :' + index + ' ' + array)
});*/


// solve this programm using fat arrow function:

var food = ['Pizza','Burger','Icecream','Waffels']

food.forEach((elements,index,array)=>{
    console.log(elements + 'index : ' + index + '  ' + array)
});
