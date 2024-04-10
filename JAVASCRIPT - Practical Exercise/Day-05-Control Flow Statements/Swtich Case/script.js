// 1st Example without break statement.
// Find the are of circle,triangle and reactangle?

let area = "circle";
let PI   = 3.142, l=5, b=4, r=3;

switch(area){
    case 'circle':
        console.log("The are of the circle is :" + PI*r**2);
        break;

    case 'triangle':
        console.log("The are of the triangle is :" + (l*b)/2);
    break;

    case "rectangle":
        console.log("The are of the reactangle is :" + (l*b));
    break;
    default:
        console.log("please enter the valid data");
}