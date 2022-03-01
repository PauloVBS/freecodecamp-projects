function telephoneCheck(str) {
    let numeros =[/^\d\d\d-\d\d\d-\d\d\d\d$/, /^\d\d\d\s\d\d\d\s\d\d\d\d$/,/^1\s\d\d\d\s\d\d\d\s\d\d\d\d$/,/^1\s\(\d\d\d\)\s\d\d\d-\d\d\d\d$/, /^\d\d\d\d\d\d\d\d\d\d$/, /^\(\d\d\d\)\d\d\d-\d\d\d\d$/,/^1\(\d\d\d\)\d\d\d-\d\d\d\d$/,/^1\s\d\d\d\s\d\d\d\s\d\d\d\d$/,/^1\s\d\d\d-\d\d\d-\d\d\d\d$/]
    for(let i = 0; i < numeros.length; i++){
    if(str.match(numeros[i])){
        return true;
    }
    }return false;
  }
  
  console.log(telephoneCheck("555-555-5555"));