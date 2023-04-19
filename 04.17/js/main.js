var month = 1;
var mysteryAmount = 0;
var rentDue = 0;
var gift = false;
salary = parseFloat(prompt(" אנא הזן את משכורתך "));
rent = parseFloat(prompt(" אנא הזן את דמי שכירותך "));
balance = salary * 2;
if (balance >= rent) {
    balance = rent;
}
else {
    rentDue = rent;
}
month++;
balance += salary / 2;
if (balance >= rentDue) {
    balance -= rentDue;
    rentDue = 0;
}
rent += 200;
if (balance >= rent) {
    balance -= rent;
}
else {
    rentDue += rent;
}
balance -= 500;
month++;
mysteryAmount = balance;
balance = 0;
if (mysteryAmount < 0) {
    gift = true;
    mysteryAmount *= -1;
}
alert("month : " + month + " mysteryAmount : " + mysteryAmount + " rentDue : " + rentDue + " gift : " + gift);