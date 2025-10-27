function ShowMessage(message)
{
    let output = document.getElementById("output");
    output.innerHTML = message
    
}
function chopVegetables()
{
    return new Promise((resolve , reject) =>{
        setTimeout(() => 
        {
            resolve("Chopped vegetables");    
        }, 1000);
    }
)}
function cookMeal()
{
    return new Promise((resolve , reject) =>{
        setTimeout(() => 
        {
            resolve("Cooked the meal");    
        }, 1500);
    }
)}
function setTable()
{
    return new Promise((resolve , reject) =>{
        setTimeout(() => 
        {
            resolve("table is set");    
        }, 1000);
    }
)}

async function start() 
{
    try 
    {
        let step1 = await chopVegetables();
        ShowMessage(step1);

         let step2 = await cookMeal();
        ShowMessage(step2);

         let step3 = await setTable();
        ShowMessage(step3);

    } 
    catch (error) 
    {
        
    } 
}
start();