document.getElementById("GenerateButton").addEventListener("click", GeneratArray);

function GeneratArray() {

    let frutis = ["Banana", "Orange", "Apple", "Kiwi","grape"];
    
    let longString = frutis.filter(f => fruit.length > 4);

    let capitalized = frutis.map(f => fruit.toUpperCase());

    document.getElementById("Result").innerHTML = `
    <p>Original Array: ${frutis}</p>
    <p>Filtered (length > 4): ${longString}</p>
    <p>Capitalized: ${capitalized}</p>
    `;
}
