let str = '31.12.2025';
let res = str.match(/^(\d\d).(\d\d).(\d{4})$/);

document.write(res[1] + " - карман 1<br>" + res[2] + " - карман 2<br>" + res[3]+" - карман 3");