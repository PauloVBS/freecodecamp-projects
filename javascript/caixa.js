function checkCashRegister(price, cash, cid) {
    let change = cash - price;

    let changeInicial = change;
    const arrMoney =[100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01]
    let cidReverso = cid.reverse()
    let primeiroValor = arrMoney.findIndex(element=> element<=change)
    let retornoFinal = {status:'', change:[]}
    function soma(item){
        total = 0
        total += item[1]
    }
    for(let i = primeiroValor; i < arrMoney.length; i++){
       
        let valor = (Math.trunc(change/arrMoney[i]))*arrMoney[i]
        if(valor > cidReverso[i][1]){valor = cidReverso[i][1]}
        change = change.toFixed(2)-valor
        
        if(valor!=0){retornoFinal.change.push([cidReverso[i][0], valor])}
        
    }if(change == 0){
        let soma =0
        for(let j = 0; j <cidReverso.length; j++){
            soma += cidReverso[j][1]

        }
        if(soma == changeInicial){
            retornoFinal.status="CLOSED"
            retornoFinal.change = cidReverso.reverse()
            return retornoFinal
        }else{
        retornoFinal.status="OPEN"}
        return retornoFinal;
    }else if(change!=0){
        retornoFinal = {status: "INSUFFICIENT_FUNDS", change: []}
        return retornoFinal
    }
        
  }
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));