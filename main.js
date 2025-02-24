let birthYear = ("When were you born?");
let city = ("What city does he live in?");
let sport  = ("What is your favorite sport?");
let currentYear = 2025;
let age = currentYear - birthYear;
let cityMessage;
switch (city) {
    case "Kyiv":
        cityMessage = "You live the capital of Ukraine.";
        break;
    case "Washington":
        cityMessage = "You live the capital of USA.";
        break;
    case "London":
        cityMessage = "You live the capital of Great Britain";
        break;
    default:
        cityMessage = `You live in the city ${city}.`;
}
console.log (`Yu are ${age} years old. ${cityMessage}.
Your favorite sport ${sport}.`);



