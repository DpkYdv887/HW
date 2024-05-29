let FatherAge = parseInt(prompt("What is the age of your Father?"));
let MotherAge = parseInt(prompt("What is the age of your Mother?"));
let YourAge = parseInt(prompt("What is your Age?"));

let sumAge = FatherAge + MotherAge + YourAge;
let avgAge = sumAge / 3;

document.write("Your average family age is " + avgAge + "<br>");

if (FatherAge > 50) {
    document.write("You should spend more time with your father<br>");
} else if (MotherAge > 50) {
    document.write("You should spend more time with your mother<br>");
} else if (FatherAge > 50 && MotherAge > 50) {
    document.write("You should spend more time with your family<br>");
}
