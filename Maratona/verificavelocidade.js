// velocidade máxima de até 70
// a cada 5 acima do limite você ganha 1 ponto
// Math.Floor()
//caso pontos maior que > 12  "carteira suspensa"

let permitida = 70;
let kmh = verificaVelocidade(150);


function verificaVelocidade(velocidade){
    if (velocidade <= permitida)
        console.log (velocidade + ' KM/h está dentro da velocidade permitida');
    else {
        const pontos = Math.floor(((velocidade - permitida) /5 ));
        console.log(velocidade - permitida + ' km/h acima da velocidade permitida');
        if (pontos >= 12)
            console.log (pontos + ' Pontos, CNH suspensa');
            else
                console.log (pontos + ' Pontos, CNH regular');

    }
}

