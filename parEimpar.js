function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const parOuImpar = process.argv[2];
const numero = Number(process.argv[3]);

function escolhas(){
    switch (parOuImpar)  {
        case "par":
            return "impar" 
        case "impar": 
            return "par"    
            
    
        default:
            break;
    }
}

const computadorNumero = Number(getRndInteger(0, 10));
const parOuImparComputador = escolhas()

console.log(parOuImpar, numero, computadorNumero, parOuImparComputador);


function vitoria(){
    const soma = numero + computadorNumero
    let resultado = ""
    
    if (soma %2 === 0){
        resultado = "Par"
    }else{
        resultado = "Ímpar"
    }
    return resultado
    
}

const final = vitoria()

console.log(`O jogado vencedor foi quem escolheu ${final}`);