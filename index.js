function valorMaximo(){
  numeros = [1,2,3,4,5,6,7,8,20,10];
  max = 0;

  for(i = 0; i < numeros.length; i++){
    if(numeros[i] > max){
      max = numeros[i];
    }
  }
  console.log(max);
}
valorMaximo();