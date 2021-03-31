for (let i = 0; i < 5; i++){
    console.log ("Imprindo de 0 a 4 !", i);
}

for (let i = 1; i <= 5; i++){
    console.log ("Imprimindo de 1 a 5 !", i); 
}

for (let i = 0; i <= 5; i++){
     if (i % 2 !== 0){
         console.log ("Imprimindo números ímpares !", i);
     }
}

for (let i = 0; i <= 5; i++){
    if (i % 2 == 0){
        console.log ("Imprimindo números pares !", i);
    }   
}
for (let i = 4; i >= 0; i--){
    console.log ("Imprindo de 4 a 0 !", i);
}

for (let i = 5; i >= 0; i--){
    if (i % 2 !== 0){
        console.log ("Imprimindo números impares decrescente!", i);
    }    
}

for (let i = 5; i >= 0; i--){
    if (i % 2 == 0){
        console.log ("Imprimindo números pares decrescente!", i);
    }    
}