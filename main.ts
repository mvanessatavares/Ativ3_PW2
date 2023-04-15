export function comparar(a:string[], b:string[]) {
    return a.length === b.length && a.every((value, index) => value === b[index]);
}

export function quest2(a: string[], b: string[]): (string | undefined)[] | undefined {
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


  export const receberParametros = (arr1: string[], arr2: string[]): boolean =>{

    if (arr1.length !== arr2.length) {
      return false;
    } else{
      return arr1.every((element, index) => element === arr2[index]);
    }
  }

  export function compareArrays(a: string[][], b: string[][]): (string | undefined)[][] {
    const result: (string | undefined)[][] = [];
  
    for (let i = 0; i < a.length && i < b.length; i++) {
      const aSub = a[i];
      const bSub = b[i];
  
      if (aSub.length !== bSub.length) {
        result.push([]);
      } else {
        const subresult: (string | undefined)[] = [];
  
        for (let j = 0; j < aSub.length; j++) {
          if (aSub[j] === bSub[j]) {
            subresult.push(aSub[j]);
          } else {
            subresult.push(undefined);
          }
        }
  
        result.push(subresult);
      }
    }
  
    return result;
  }

//quest5
export interface Cidade{
    alcunha: String,
    coodenadas: {
      latitude: Number[],
      longitude: Number[],
    },
    nome: String,
    estado: String
  }

export const cord = (cidade : Cidade) =>{

    let resp = `
    cidade: ${cidade.nome}, ${cidade.estado}
    * "${cidade.alcunha}"
    * Localizada em ${cidade.coodenadas.latitude[0]}° ${cidade.coodenadas.latitude[1]}' ${cidade.coodenadas.latitude[2]}" S ${cidade.coodenadas.longitude[0]}° ${cidade.coodenadas.longitude[1]}' ${cidade.coodenadas.longitude[2]}" O
    `
    return resp
        
}

//quest6

export interface restaurantes{
    cidade: string,
    nome: string
}

export function getTeste(Restaurante: restaurantes) {
    return `${Restaurante.nome} ${Restaurante.nome}`;
}



