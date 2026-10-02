function nameFormat(firstname, lastname) {
    return `${firstname} ${lastname}`;
}

function getgreeting(timeofday) {
    if (timeofday === "morning") {
        return "Good morning";
    }

    if (timeofday === "evening") {
        return "Good evening";
    }

    return "Good afternoon";
}

function createGreeting(firstname, lastname, timeofday) {
    let greeting = getgreeting(timeofday);
    let name = nameFormat(firstname, lastname);

    return `${greeting}, ${name}`;
}

let time = "morning";
let firstName = "Abi";
let lastname = "Timalsina";

console.log(createGreeting(firstName, lastname, time));