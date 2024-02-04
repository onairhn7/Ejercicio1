// vamos a comenzar creando una funcion que permita calcular el area de un rectangulo.



function calcularArea() {
    var base = parseFloat(document.getElementById('baseInput').value);
    var altura = parseFloat(document.getElementById('alturaInput').value);
  
    if (isNaN(base) || isNaN(altura)) {
      alert("Por favor, ingrese valores válidos para la base y la altura.");
      return;
    }
  
    var area = base * altura;
    document.getElementById('resultado').value = area;
  }
  
  function limpiarCampos() {
    document.getElementById('rectangleForm').reset();
    document.getElementById('resultado').value = "";
  }
