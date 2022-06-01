// solução para o desafio feito em javascript

//Tansformar "curInv" em um array que contém arrays de strings.
function getArrayOfStrings(array) {
  return array.map((item)=> item[1]) 
}

// Ordena um array em ordem alfabética
function sortArray(array) {
  array.sort(function(a, b){
    if(a[1] < b[1]) { return -1; }
    if(a[1] > b[1]) { return 1; }
    return 0;
  });
}

// função que retorna um array que representa o inventorio atualizado segundo as regras contidas no README.
function getUpdatedInv(curInv, newInv) {
  const updatedInv = curInv;
  const curInvStrings = getArrayOfStrings(curInv);

  newInv.forEach((item) => {
    if(curInvStrings.includes(item[1])) {
      const stringIndex = curInvStrings.indexOf(item[1])
      updatedInv[stringIndex][0] = curInv[stringIndex][0] +item[0];
    } else {
      updatedInv.push(item);
    }
  });

  sortArray(updatedInv);
  return updatedInv;
}

module.exports = getUpdatedInv;
