var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var txt_lineas = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);
var altura = d.clientHeight;
var ancho = d.clientWidth;

dibujarlinea("black", 1, 1, 1, 299); //eje y vertical derecha
dibujarlinea("black", 299, 299, 299, 1); //eje y vertical izquierda
dibujarlinea("black", 1, 1, 299, 1); //eje x horizontal superior
dibujarlinea("black", 1, 299, 299, 299); //eje x horizontal inferior

function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick() {
  //variables para el bucle de la funcion dibujarlinea
  var lineas = parseInt(txt_lineas.value);
  var espacioAltura = altura / lineas;
  var l = 0;
  var xi, yi, xf, yf;
  var x;
  lienzo.clearRect(0, 0, ancho, altura);

  //esquina inferior izquierda
  for (l = 0; l < lineas; l++) {
    yi = espacioAltura * l;
    xf = espacioAltura * (l + 1);
    dibujarlinea("green", 0, yi, xf, 300);
  }
  //esquina infersior derecha

  for (l = 0; l < lineas; l++) {
    yi = espacioAltura * l;
    xf = 300 - espacioAltura * (l + 1);
    dibujarlinea("yellow", 300, yi, xf, 300);
  }

  //esquina superior  derecha
  for (l = 0; l < lineas; l++) {
    xi = espacioAltura * l;
    yf = espacioAltura * (l + 1);
    dibujarlinea("blue", xi, 0, 300, yf);
  }

  //esquina superior izquierda
  for (l = 0; l < lineas; l++) {
    xi = 300 - espacioAltura * l;
    yf = espacioAltura * (l + 1);
    dibujarlinea("red", xi, 0, 0, yf);
  }

  //esquina inferior izquierda
  for (l = 0; l < lineas; l++) {
    yi = espacioAltura * l;
    xf = espacioAltura * (l + 1);
    dibujarlinea("green", 0, yi, xf, 300);
  }
}
