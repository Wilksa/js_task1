//Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5.
let n = 0;
let x = Math.floor(Math.random(1) *10);

while (n < 5) {
  n++;
  x += n;
}