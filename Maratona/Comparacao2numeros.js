function max (numero1, numero2) {
    if (numero1 > numero2)
        return numero1;
    else 
        return numero2;
}

let valorMaior = max(20,10);
console.log(valorMaior);



function comparar (numero3, numero4) {
    return numero3 > numero4 ? numero3: numero4; // expressão ternaria
}

let valorMaiorA = comparar(30,40);
console.log(valorMaiorA);


function maiorMenorIgual (n1,n2) {
    if (n1 == n2)
        return 'Igual'

        else if (n1 > n2)
            return n1
        
            else
                return n2
        
}

let ab = maiorMenorIgual (9, 9);
console.log (ab);