// after ES6 WE HAVE FOR ...IN AND FOR OF LOOP TOO :

let myfriends = [ 'aarvi','kiaan','arnav','arrya','priya','advika','venky'];
for(let elements in myfriends ){
    console.log(elements);
}

for(let elements of myfriends){
    console.log(elements);
}

// calls a function for each  elements in the array.

myfriends.forEach(function(elements,index,array) {
    console.log(elements + "index :" + index);
});