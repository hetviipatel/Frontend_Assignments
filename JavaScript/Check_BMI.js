console.log("BMI Check");
function calculateBMI( mass , height)
{
    return mass / (height * height);
} 

//Data1
let MarkBMI = calculateBMI(70, 1.75);
console.log("Mark's BMI is: " + MarkBMI); 

let JohnBMI = calculateBMI(85, 1.80);
console.log("John's BMI is: " + JohnBMI);

let MarkHigherBMI = MarkBMI > JohnBMI;
if(MarkHigherBMI == true)
{
    console.log("Mark's BMI is higher than John's");
}

//Data2
MarkBMI = calculateBMI(95, 1.88);
console.log("Mark's BMI is: " + MarkBMI);
JohnBMI = calculateBMI(85, 1.76);
console.log("John's BMI is: " + JohnBMI);
MarkHigherBMI = MarkBMI > JohnBMI;
if(MarkHigherBMI == true)
{
    console.log("Mark's BMI is higher than John's");
}