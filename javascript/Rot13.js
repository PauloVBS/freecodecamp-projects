function rot13(str) {
    let arr = str.split('')
    let novaArr = []
    for(i=0; i<arr.length; i++){
        switch(arr[i]){
            case 'A':
            novaArr.push('N')
            break;
            case 'B':
            novaArr.push('O')
            break;
            case 'C':
            novaArr.push('P')
            break;
            case 'D':
            novaArr.push('Q')
            break;
            case 'E':
            novaArr.push('R')
            break;
            case 'F':
            novaArr.push('S')
            break;
            case 'G':
            novaArr.push('T')
            break;
            case 'H':
            novaArr.push('U')
            break;
            case 'I':
            novaArr.push('V')
            break;
            case 'J':
            novaArr.push('W')
            break;
            case 'K':
            novaArr.push('X')
            break;
            case 'L':
            novaArr.push('Y')
            break;
            case 'M':
            novaArr.push('Z')
            break;
            case 'N':
            novaArr.push('A')
            break;
            case 'O':
            novaArr.push('B')
            break;
            case 'P':
            novaArr.push('C')
            break;
            case 'Q':
            novaArr.push('D')
            break;
            case 'R':
            novaArr.push('E')
            break;
            case 'S':
            novaArr.push('F')
            break;
            case 'T':
            novaArr.push('G')
            break;
            case 'U':
            novaArr.push('H')
            break;
            case 'V':
            novaArr.push('I')
            break;
            case 'W':
            novaArr.push('J')
            break;
            case 'X':
            novaArr.push('K')
            break;
            case 'Y':
            novaArr.push('L')
            break;
            case 'Z':
            novaArr.push('M')
            break;
            default:
            novaArr.push(arr[i])
            break;
        }
    }
    return novaArr.join('');
  }
  
  console.log(rot13("SERR PBQR PNZC"));