
$("#but1").click(function(){
	if(/^(http:[//])/.test(document.getElementById("1").value))
		alert("в начале этой строки стоит http:// либо https:// ");
	else if(/^(https:[//])/.test(document.getElementById("1").value))
		alert("в начале этой строки стоит http:// либо https://");
	else
		alert("в начале этой строки не стоит http:// либо https://");
});

$("#but2").click(function(){
	if(/(jpg)$/.test(document.getElementById("2").value))
		alert("jpg");
	else if(/(jpeg)$/.test(document.getElementById("2").value))
		alert("jpg");
	else
		alert("не jpg");
});

$("#but3").click(function(){
	if(/^\d{1,12}$/.test(document.getElementById("3").value))
		alert("это число длинной до 12 символов");
	else
		alert("нет");
});

//я так и не понял как проверить дату на достоверность, так что здесь проверяется просто формат 
$("#but4").click(function(){
	if(/^\d\d[.]\d\d[.]\d{4}$/.test(document.getElementById("4").value))
		alert("это дата");
	else
		alert("это не дата");
});

//буду краток. Это не я ленивый, такова природа емейлов
$("#but5").click(function(){
	if(/.@{1}./.test(document.getElementById("5").value))
		alert("mail");
	else
		alert("не mail");
});
