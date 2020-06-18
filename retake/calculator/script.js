document.getElementById("color1").value = "#f5f5f5";
document.getElementById("color2").value = "#f5f5f5";
var textInput = document.getElementById("textInput");

document.getElementById("textInput").addEventListener('change', function (e) {
    textReload()
})
document.getElementById("select1").addEventListener('change', function (e) {
    textReload()
})
document.getElementById("select2").addEventListener('change', function (e) {
    textReload()
})
document.getElementById("letHeight").addEventListener('change', function (e) {
    textReload()
})
document.getElementById("color1").addEventListener('change', function (e) {
    textReload()
})
document.getElementById("color2").addEventListener('change', function (e) {
    textReload()
})
document.getElementById("checkboxOne").addEventListener('change', function (e) {
    textReload()
})
document.getElementById("checkboxTwo").addEventListener('change', function (e) {
    textReload()
})
document.getElementById("Height").addEventListener('change', function (e) {
    textReload()
})
document.getElementById("Width").addEventListener('change', function (e) {
    textReload()
})
document.getElementById("phone").addEventListener('change', function (e) {
    textReload()
})
document.getElementById("mail").addEventListener('change', function (e) {
    textReload()
})
document.getElementById("name").addEventListener('change', function (e) {
    textReload()
})

function button(){
    if(document.getElementById("name").value == ""){
        alert("Необходимо заполнить поле 'E mail'")
        
    }
    else if(document.getElementById("phone").value == ""){
        alert("Необходимо заполнить поле 'Телефон'")
    }
    else if(document.getElementById("mail").value == ""){
        alert("Необходимо заполнить поле 'Имя'")
    }
    else{
        if(!/.+@.+\..+/i.test(document.getElementById("name").value)){
            alert("Неверный формат 'E mail'")
        }
        else {
            alert("Готово")
        }
    }
}

function textReload(){
    var cena = 0
    var a = 0
    var b = 0
    var d = 0
    var s = (document.getElementById("Height").value*document.getElementById("Width").value)*2.5
    var color1 = document.getElementById("color1").value;
    var text3D = document.querySelector('.text').style
    text3D.fontSize = document.getElementById("letHeight").value*2+'px';
    text3D.fontFamily = document.getElementById("select2").value;
    text3D.color = color1;
    document.querySelector('#text').innerHTML = document.querySelector('#textInput').value 
    document.querySelector('.wrapper-vertigo').style.marginTop = '-'+((1+document.getElementById("letHeight").value*2.3))+"px";
    if (document.querySelector('#checkboxOne').checked){
        document.querySelector('#text').style.backgroundColor = document.getElementById("color2").value;
        b=s
    }
    else{
        document.querySelector('#text').style.backgroundColor = "unset"
        b=0
    }
    if (document.getElementById("select1").value==1){
        text3D.textShadow = "1px 1px 1px #000000,1px 2px 1px #000000,1px 3px 1px #000000,1px 4px 1px #080000"
        a=0
    }
    if (document.getElementById("select1").value==2){
        text3D.textShadow = "0 0 10px "+color1+", 0 0 20px"+color1
        a=1000
        
    }
    if (document.getElementById("select1").value==3){
        text3D.textShadow = " 0 0 30px "+color1+", 0 0 40px"+color1+", 0 0 50px "+color1+", 0 0 60px "+color1+", 0 0 70px "+color1
        a=5000
    }
    if (document.getElementById("select1").value==4){
        text3D.textShadow = " 0 0 50px "+color1+", 0 0 60px "+color1+", 0 0 70px "+color1
        a=3000
    }
    if(document.querySelector('#checkboxTwo').checked) {
        c = 3000
    }
    else{
        c = 0
    }
    d=document.querySelector('#text').innerHTML.length*141.3
    cena=cena+a+b+(document.getElementById("letHeight").value*117.5)+c+d
    document.querySelector('#pricing').innerHTML = cena+" руб"
}
  