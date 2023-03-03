//Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje.

for (var i = 1; i < 11; i++) {
    var count = 1;
    for (var j = 1; j < Math.floor(Math.random(1) *10); j++) {
        count++;
    }
    console.log(count);
}