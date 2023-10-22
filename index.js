function calculadora(numero1, operador, numero2){
  let resultado;
  switch(operador){
    case "+": resultado = numero1 + numero2;
      break;
    case "-": resultado = numero1 - numero2;
      break;
    case "*": resultado = numero1 * numero2;
      break;
    case "/": resultado = numero1 / numero2;
      break;
    default: resultado = "Operador inválido";
  }
  console.log(resultado);
}
calculadora(2,"*",5);