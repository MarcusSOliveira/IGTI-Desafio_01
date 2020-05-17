function func(){

    var Red = document.getElementById('inputRed').value;
    var Green = document.getElementById('inputGreen').value;
    var Blue = document.getElementById('inputBlue').value;    
    var resultado = document.querySelector("canvas").getContext("2d");

    resultado.fillStyle = `rgb(${Red},${Green},${Blue})`;    
    resultado.fillRect(0,0,150,150);
}
