function comparar(a:string[], b:string[]) {
    return a.length === b.length && a.every((value, index) => value === b[index]);
}

console.log(comparar(['vanessa'], ['vanessa'])); 
console.log(comparar(['vanessa'], ['maria'])); 