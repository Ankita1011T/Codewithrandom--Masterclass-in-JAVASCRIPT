// challenge time : 
//Write a program that works out whether if a given year is a leap year or not ?//
// A normal year has 365 days, leap years have 366, with an extra day in february. //

let year = 2024;
debugger;
if(year % 4 === 0){
    if(year % 100 === 0){
        if(year % 400 === 0 ){

console.log("The year" + year + "is a leap year ");
        }else{
            console.log(" The year " + year + " is not a leap year ");
        }
    }else{
            console.log(" The year " + year + " is a leap year ");
    }    
}else{  
            console.log(" The year " + year + " is not a leap year ");
        }
    

