function sombotoes(idAudio) {
 
    const elemento = document.querySelector(idAudio);
 
   if(elemento && elemento.localName === 'audio'){
        elemento.play();           
    } else {
        console.log('Elemento não encontrado ou seletor inválido')
    }
}

const ListadeTeclas = document.querySelectorAll('.tecla')

for (i = 0; i < 9; i++) {

    const tecla = ListadeTeclas[i]
    const qualbotao =  tecla.classList[1];
    const idAudio = `#som_${qualbotao}`

    tecla.onclick = function (){
        sombotoes(idAudio);
    }

    tecla.onkeydown = function (e){
        if (e.code === 'Space' || e.code === 'Enter'){
            tecla.classList.add('ativa')
        }
    }

    tecla.onkeyup = function (){
        tecla.classList.remove('ativa')
    }
}
