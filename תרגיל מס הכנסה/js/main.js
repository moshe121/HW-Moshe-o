var salary = prompt("אנא הזן את משכורתך");
var tax = 0;
var message = "";
if (salary < 25000) {
    tax = salary / 10;
}
if (salary > 25000 && salary < 50000) {
    tax = 2500 + (salary - 25000) / 5;
}
if (salary > 50000 && salary < 100000) {
    tax = 7500 + ((salary - 50000) / 10) * 3;
}
if (salary > 100000 && salary < 150000) {
    tax = 22500 + ((salary - 100000) / 10) * 4;
}
if (salary > 150000) {
    tax = 42500 + ((salary - 150000) / 10) * 5;
}
message = "אתה חייב לשלם למס הכנסה " + tax + " שקלים חדשים";
alert(message);