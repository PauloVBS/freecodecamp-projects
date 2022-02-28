function spinalCase(str) {
    let stringSplitada = str.split("")
    for(let i = 0; i < stringSplitada.length; i++){
        if(stringSplitada[i]==' '||stringSplitada[i]=="_"){
            stringSplitada[i] = "-";
        }
    }console.log(stringSplitada.join(''));
    let arrFinal =[]; 
    let ultimaPos = 0
    if(stringSplitada.join('').match(/[a-z][A-Z]/)){
    for(let i = 0; i < stringSplitada.length; i++){
        if(stringSplitada[i]===stringSplitada[i].toUpperCase() && stringSplitada[i-1]!=='-'&& i!==0 && stringSplitada[i]!='-'){
            console.log(stringSplitada[i])
            arrFinal=arrFinal.concat(stringSplitada.slice(ultimaPos,i))
            arrFinal.push("-");
            ultimaPos = i
        }
    }arrFinal = arrFinal.concat(stringSplitada.slice(ultimaPos, stringSplitada.length))
        
    }else{
        arrFinal = arrFinal.concat(stringSplitada.slice(0,stringSplitada.length))
    }
    return arrFinal.join('').toLowerCase()
}
// final = stringSplitada.join("").toLowerCase()
    
 
console.log(spinalCase("AllThe-small Things"));