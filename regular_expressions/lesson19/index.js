let str = 'a1b c34d x567z';
var arr = str.match(/\d+/g, '!');
arr = arr.map(string => parseInt(string));
document.write(arr + " - массив<br>");
var sum = 0;
for (var i = 0; i < arr.length; i++){
	sum = sum + arr[i];
}
document.write(sum + " - сумма элементов");
