// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    let valueInEuro = valueInDollar / 1.07; // Convert to Euro
    let valueInYen = valueInEuro * 156.5;   // Then to Yen
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    let valueInEuro = valueInYen / 156.5;   // Convert Yen to Euro
    let valueInPound = valueInEuro * 0.87;  // Convert Euro to GBP
    return valueInPound;
}


// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar , fromDollarToYen , fromYenToPound };