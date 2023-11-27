let botao = document.getElementById('botao');

botao.addEventListener('click', ()=>{
    let inputAltura = parseInt(document.getElementById('inputAltura').value);
    let inputPeso = parseInt(document.getElementById('inputPeso').value);
    let resposta = document.getElementById('resposta'); 
    let calculo = inputPeso / (inputAltura/100 * inputAltura/100)

    if(calculo < 16){
        resposta.innerHTML = `<span class="text-white text-3xl mt-5 ">Magreza Grave</span>`;
            console.log('oi')
    }
    else if(calculo >= 16 && calculo <=16.9){
        resposta.innerHTML = `<span class="text-white text-3xl mt-5">Magreza Moderada</span>`;
    }
    else if(calculo >= 17 && calculo <= 18.5){
        resposta.innerHTML = `<span class="text-white text-3xl mt-5">Magreza Leve</span>`;
    }
    else if(calculo >= 18.6 && calculo <= 24.9){
        resposta.innerHTML = `<span class="text-white text-3xl mt-5">Peso Ideal</span>`
    }
    else if(calculo >= 25 && calculo <= 29.9)
        resposta.innerHTML = `<span class="text-white text-3xl mt-5">Sobrepeso</span>`
    else if(calculo >= 30 && calculo <= 34.9){
        resposta.innerHTML = `<span class="text-white text-3xl mt-5">Obesidade Grau I</span>`
    }
    else if(calculo >= 35 && calculo <= 39.9){
        resposta.innerHTML = `<span class="text-white text-3xl mt-5">Obesidade Grau II ou Severa</span>`
    }
    else if(calculo >= 40){
        resposta.innerHTML = `<span class="text-white text-3xl mt-5">Obesidade Grau III ou Mórbida</span>`
    }
    else{
        resposta.innerHTML = `<span class="text-red-500 text-lg text-center mx-3 mt-5">Algo saiu mal, verifique se você digitou corretamente.</span>`
    }
})