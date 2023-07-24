

function horas() {
    let data = new Date();
    let hora = data.getHours();
    let minuto = data.getMinutes();
    let segundo = data.getSeconds();
    let horasCerta = document.getElementById('relogio')
    let sessao = ''
    let msg = ''
    //let img = document.createElement('img')
    //img.setAttribute('src', 'foto')

    hora = (hora<10)?"0"+hora:hora
    minuto = (minuto<10)?"0"+minuto:minuto
    segundo = (segundo<10)?"0"+segundo:segundo
    
    sessao = (hora<13)?"AM":"PM"
    
    if(hora>=0 && hora<4) {
        msg = 'Boa Madrugada! '
    }else if(hora>=5 && hora<=12) {
        msg = 'Bom Dia! '
    } else if(hora>=13 && hora<=18) {
        msg = 'Boa Tarde! '
    }else if(hora>=19) {
        msg = 'Boa Noite! '
        //img.setAttribute('src','imagens/noite.png')
        
        
        
    }
    setTimeout(horas,1000)



    horasCerta.innerHTML = `${msg} ${hora}:${minuto}:${segundo} - ${sessao}`


}

function cavaleirosDoZodiaco() {
    let selecao = window.document.getElementById('ouros')
    let cavaleiro = selecao.value
    let mostrarCavaleiro = window.document.getElementById('res')
    let fotoCavaleiro = window.document.getElementById('cavaleiro')
    let img = document.createElement('img')
    img.setAttribute('src','foto')

    //mostrarCavaleiro.innerHTML = 'teste' // funcionando

    if(cavaleiro=='info') {
        window.alert('Digite uma Opção')
    }else {
        switch (cavaleiro) {
            case cavaleiro.value = 'cav01':
                mostrarCavaleiro.innerHTML = 'Mu de Aries. <br>'
                img.setAttribute('src', 'imagens/mu-de-aries.png') 
                break;
                
        
            case cavaleiro.value = 'cav02':
                mostrarCavaleiro.innerHTML = 'Aldebaran de Touro. <br>'
                img.setAttribute('src', 'imagens/aldebaran-de-touro.png')
                break;

            case cavaleiro.value = 'cav03':
                mostrarCavaleiro.innerHTML = 'Saga de Gêmeos. <br>' 
                img.setAttribute('src','imagens/saga-de-gemeos.png')   
                break;


            case cavaleiro.value = 'cav04':
                mostrarCavaleiro.innerHTML = 'Máscara da morte de Câncer. <br>'
                img.setAttribute('src','imagens/mascara-da-morte.png')
                break;


            case cavaleiro.value = 'cav05':
                mostrarCavaleiro.innerHTML = 'Aiolia de Leão. <br>'
                img.setAttribute('src','imagens/aiolia-de-leao.png')
                break;


            case cavaleiro.value = 'cav06':
                mostrarCavaleiro.innerHTML = 'Shaka de Virgem. <br>'
                img.setAttribute('src','imagens/shaka-de-virgem.png')
                break;


            case cavaleiro.value = 'cav07':
                mostrarCavaleiro.innerHTML = 'Dohko de Libra. <br>'
                img.setAttribute('src','imagens/dohko-de-libra.png')
                break;


            case cavaleiro.value = 'cav08':
                mostrarCavaleiro.innerHTML = 'Milo de Escorpião. <br>'
                img.setAttribute('src','imagens/milo-de-escorpiao.png')
                break;


            case cavaleiro.value = 'cav09':
                mostrarCavaleiro.innerHTML = 'Aiolos de Sagitário. <br>'
                img.setAttribute('src','imagens/aiolos-de-sagitario.png')
                break;


            case cavaleiro.value = 'cav10':
                mostrarCavaleiro.innerHTML = 'Shura de Capricórnio. <br>'
                img.setAttribute('src','imagens/shura-de-capricornio.png')
                break;


            case cavaleiro.value = 'cav11':
                mostrarCavaleiro.innerHTML = 'Camus de Aquário. <br>'
                img.setAttribute('src','imagens/camus-de-aquario.png')
                break;


            case cavaleiro.value = 'cav12':
                mostrarCavaleiro.innerHTML = 'Afrodite de Peixes. <br>'
                img.setAttribute('src','imagens/afrodite-de-peixes.png')
                break;


            default: 
                mostrarCavaleiro.innerHTML = 'somente os 12 signos do zodíaco'
                break;
            }
        mostrarCavaleiro.appendChild(img) 
    }
}

function limpar () {
    let limpeza = window.document.getElementById('res')
    limpeza.innerHTML = ''
}



