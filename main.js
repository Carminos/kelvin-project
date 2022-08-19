// Set temperature in kelvin  
const kelvin = 0;

// Convert temperature in celsius to kelvin
const celsius = kelvin - 273;

// Set temperature in Fahrenheit and round down
const fahrenheit = Math.floor(celsius * (9/5) + 32);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)


// Convert temperature in Celsius to Newton 
let newton = Math.floor(celsius * 0.33);

console.log(`The temperature is ${newton} degrees Newton`)
