function multiplo(resultados){
  let multiplicados = [3,4,5,6,7,8];
  let factor =  resultados[0] / multiplicados[0];
  let tamano = multiplicados.length;
  for(i = 0;i < tamano; i++){
    let temporal = resultados[i] / multiplicados[i];
    if(factor != temporal){
      return false;
    }
    console.log(temporal);
  }
}
multiplo([27,36,45,54,63,72]);