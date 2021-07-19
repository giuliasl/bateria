//representa o corpo do site, tudo oq está no body
//o addEventListener (observador de evento) irá esperar a ocorrencia de algum evento específico, no caso quando a tecla for precionada
//esse evento possui dois parâmetros: keyup (tecla pressionada e solta em seguida) e keydown (tecla pressionada sem intervalos), quando isso acontecer ocorrerá uma função e ela receberá os dados do evento
    document.body.addEventListener('keyup', (event)=>{
    //playsound receberá as funções
   playSound(event.code.toLowerCase());//toLowerCase vai transformar o evento em minúsculo para manter o padrao de identificação ho html

})

//quando um evento ocorrer nesse botão de class="composer", ele receberá um evento de clique e com isso receberá mais uma função. 
    document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value;//pegará o elemento do input do html, que é o campo onde será digitado as letras dos sons. o value identifica oq foi digitado

    if(song !== ''){//se song for diferente (! ==) de 'vazio', crie um array para criar uma lista separada das letras selecionadas
        let songArray = song.split('');
        playComposition(songArray); //o array vai ser lançado nessa função
    }
})

//funções que ocorrerão
    function playSound(sound){
        let audioElement = document.querySelector(`#s_${sound}`);//buscará o id/arquivo de audio da tecla que foi pressionada e soltará o som

        let keyElement = document.querySelector(`div[data-key="${sound}"]`);//vai procurar a div com os [atributos] especificados = "$sound"

//VERIFICA SE FOI PRESSIONADO A TECLA CERTA
    if(audioElement){//se foi encontrado
       audioElement.currentTime = 0;//quando a tecla for pressionada varias vezes o elemento não vai esperar o audio acabar para poder soltar o audio de novo
       audioElement.play();//para tocar o som específico 
        
    }

//VERIFICA SE A DIV FOI ENCONTRADA
    if(keyElement){
        keyElement.classList.add('active');//classList (pegar informações da classe do css para aplicar os efeitos, no caso o ACTIVE)

    setTimeout(()=>{//possui dois parâmetros, o primeiro oq vai ser feito, e o segundo o tempo em que vai acontecer
        keyElement.classList.remove('active');//depois dos 300milisegundos ele removerá  o elemento
        }, 300);
    }
}

//EVENTO NO BOTÃO "TOCAR"
    function playComposition(songArray){
        //intervalo de tempo entre o loop
        let wait = 0;

        for(let songItem of songArray){//função para executar um item(letra) de cada vez 
            setTimeout(() => {
                 //vai tocar a tecla pressionada
                playSound(`key${songItem}`);
            }, wait);

            wait += 250;
        }
    }