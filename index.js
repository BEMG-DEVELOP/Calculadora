function valorMaximo(){
   let numeros = [1,2,3,4,5,6,7,8,20,10];
   let numeroMaximo = 0;

  for(i = 0; i < numeros.length; i++){
    if(numeros[i] > numeroMaximo){
      numeroMaximo = numeros[i];
    }
  }
  console.log(numeroMaximo);
}
valorMaximo();