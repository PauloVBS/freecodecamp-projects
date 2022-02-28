function convertToRoman(num) {
    let arrInterm = num.toString().split('').reverse();
    const arrRomanos = ['I','V','X','L','C','D','M']
    console.log(arrInterm)
    let arrFinal = []
    for(let i =0; i< arrInterm.length; i++){
        let numero = arrInterm[i]
        //console.log(numero)
        if(numero>=1 && numero<=3){
                for(let j = 0; j < numero; j++){
                arrFinal.unshift(arrRomanos[2*i])
                }
                
        }else if(numero ==4){
                arrFinal.unshift(arrRomanos[2*i+1])
                arrFinal.unshift(arrRomanos[2*i])
        }else if(numero ==5){
                arrFinal.unshift(arrRomanos[2*i+1])
        }else if(numero < 9 && numero > 5 ){
                for (let j = 0; j < numero-5; j++){
                arrFinal.unshift(arrRomanos[2*i])
                }
                arrFinal.unshift(arrRomanos[2*i+1])
        }else if(numero == 9 ){
                arrFinal.unshift(arrRomanos[2*i+2])
                arrFinal.unshift(arrRomanos[2*i])
        }
    }return arrFinal.join('');
   }
   
   console.log(convertToRoman(11));