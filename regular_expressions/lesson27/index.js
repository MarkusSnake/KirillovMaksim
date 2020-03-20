let str = '1 23 456 789';
let res = str.search(/\d{3}/);
document.write(res + " - позиция первого трёхзначного числа");