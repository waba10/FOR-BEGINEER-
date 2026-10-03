function celciusToFharenheit(celcius) {
    return (celcius * 9) / 5 + 32;
}

function FharenheitTocelcius(Fharenheit) {
    return (Fharenheit - 32) * 5 / 9;
}

function Converter(value, unit) {
    return `${value} ${unit}`;
}

const Fharenheit = celciusToFharenheit(95);
console.log(Converter(Fharenheit, "F"));

const celcius = FharenheitTocelcius(78);
console.log(Converter(celcius, "C"));

const FreezingFharenhite = celciusToFharenheit(-2);
console.log(Converter(FreezingFharenhite, "F"));

const Freezingcelcius = FharenheitTocelcius(48);
console.log(Converter(Freezingcelcius, "C"));