export function equalElements(a: string[], b: string[]): (string | undefined)[] | undefined {
    if (a.length !== b.length) {
      return undefined;
    }
    const result: (string | undefined)[] = [];
  
    for (let i = 0; i < a.length; i++) {
      if (a[i] === b[i]) {
        result.push(a[i]);
      } else {
        result.push(undefined);
      }
    }
  
    return result;
  }

var firstArray = ['a','b']
var secondArray = ['a','b','c']
console.log(equalElements(firstArray,secondArray))
var firstArray = ['a','b','d']
var secondArray = ['a','b','c']
console.log(equalElements(firstArray,secondArray))