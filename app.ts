import { comparar, quest2, receberParametros, compareArrays, cord, restaurantes, getTeste } from "./main";

console.log("Quest1")
console.log(comparar(['vanessa'], ['vanessa'])); 
console.log(comparar(['vanessa'], ['maria'])); 


console.log("Quest2")
var firstArray = ['a','b']
var secondArray = ['a','b','c']
console.log(quest2(firstArray,secondArray))
var firstArray = ['a','b','d']
var secondArray = ['a','b','c']
console.log(quest2(firstArray,secondArray))

console.log("Quest3")
const array1 = ["vanessa", "maria"];
const array2 = ["verde", "azul"];
console.log(receberParametros(array1, array2));

console.log('Quest4')
const d: string[][] = [['a', 'b'], ['c', 'd']]
const e: string[][] = [['a', 'b'], ['d', 'c']]
const result = compareArrays(d, e)
console.log(result)

console.log("Quest5")
let cidade = {
    alcunha: "A terra que ensinou a Paraíba a ler.",
    coodenadas: {
      latitude: [6, 53, 24],
      longitude: [38, 33, 43],
    },
    nome: "Cajazeiras",
    estado: "Paraíba",
}
console.log(cord(cidade));


console.log('Quest6')
const Restaurante: restaurantes[] = [
    { cidade: "Cajazeiras", nome: "Burgdega" },
    { cidade: "Sousa", nome: "Dino's" },
    { cidade: "Cajazeiras", nome: "Avenida" },
];



console.log(Restaurante);



