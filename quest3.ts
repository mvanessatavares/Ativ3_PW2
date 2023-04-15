export const receberParametros = (arr1: string[], arr2: string[]): boolean =>{

  if (arr1.length !== arr2.length) {
    return false;
  } else{
    return arr1.every((element, index) => element === arr2[index]);
  }
}

const array1 = ["vanessa", "maria"];
const array2 = ["verde", "azul"];

console.log(receberParametros(array1, array2));

