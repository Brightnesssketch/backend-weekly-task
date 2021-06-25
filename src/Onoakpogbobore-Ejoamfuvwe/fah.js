//This function takes in one number type as its parameter
//The function converts convert from Celsius to Fahrenheit.
//The formular to convert to fahrenheit is "temperature in Celsius times 9 / 5, plus 32".

function convertToFahrenheit(celsius) {
    let fahrenheit;
    return (celsius * 1.8 ) + 32;
}

console.log(convertToFahrenheit(-30));
console.log(convertToFahrenheit(-10));
// convertToF(-30) // -> -22
// convertToF(-10) // -> 14