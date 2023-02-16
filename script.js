const n = +prompt("Введите число");
const VALUE = 3;
const result = [];

for (i = 0; i <= n; i++) {
    result.push(VALUE ** i);
}

alert(result.join(', '))
