

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

seletor = addEventListener('mousemove',cavaleirosDoZodiaco)// com esse comando pegaremos o resultado automáticamente.



function cavaleirosDoZodiaco() {
    let selecao = window.document.getElementById('ouros')
    let cavaleiro = selecao.value
    let mostrarCavaleiro = window.document.getElementById('res')
    let nomeCavaleiro = window.document.getElementById('cavaleiro')
    let img = document.createElement('img')
    img.setAttribute('src','foto')
    seletor = document.getElementById('res')

    

    //mostrarCavaleiro.innerHTML = 'teste' // funcionando

    if(cavaleiro=='info') {
       window.alert('Digite uma Opção')
    }else {
        switch (cavaleiro) {
            case cavaleiro.value = 'cav01':
                mostrarCavaleiro.innerHTML = '<br>Mu de Aries. <br><br>.'
                img.setAttribute('src', 'imagens/mu-de-aries.png') 
                break;
                
        
            case cavaleiro.value = 'cav02':
                mostrarCavaleiro.innerHTML = '<br>Aldebaran de Touro. <br><br>'
                img.setAttribute('src', 'imagens/aldebaran-de-touro.png')
                break;

            case cavaleiro.value = 'cav03':
                mostrarCavaleiro.innerHTML = '<br>Saga de Gêmeos. <br><br>' 
                img.setAttribute('src','imagens/saga-de-gemeos.png')   
                break;


            case cavaleiro.value = 'cav04':
                mostrarCavaleiro.innerHTML = '<br>Máscara da morte de Câncer. <br><br>'
                img.setAttribute('src','imagens/mascara-da-morte.png')
                break;


            case cavaleiro.value = 'cav05':
                mostrarCavaleiro.innerHTML = '<br>Aiolia de Leão. <br><br>'
                img.setAttribute('src','imagens/aiolia-de-leao.png')
                break;


            case cavaleiro.value = 'cav06':
                mostrarCavaleiro.innerHTML = '<br>Shaka de Virgem. <br><br>'
                img.setAttribute('src','imagens/shaka-de-virgem.png')
                break;


            case cavaleiro.value = 'cav07':
                mostrarCavaleiro.innerHTML = '<br>Dohko de Libra. <br><br>'
                img.setAttribute('src','imagens/dohko-de-libra.png')
                break;


            case cavaleiro.value = 'cav08':
                mostrarCavaleiro.innerHTML = '<br>Aiolos de Sagitário. <br><br>'
                img.setAttribute('src','imagens/aiolos-de-sagitario.png')
               
                break;


            case cavaleiro.value = 'cav09':
                mostrarCavaleiro.innerHTML = '<br>Aiolos de Sagitário. <br><br>'
                img.setAttribute('src','imagens/milo-de-escorpiao.png')
              
                break;


            case cavaleiro.value = 'cav10':
                mostrarCavaleiro.innerHTML = '<br>Shura de Capricórnio. <br><br>'
                img.setAttribute('src','imagens/shura-de-capricornio.png')
                break;


            case cavaleiro.value = 'cav11':
                mostrarCavaleiro.innerHTML = '<br>Camus de Aquário. <br><br>'
                img.setAttribute('src','imagens/camus-de-aquario.png')
                break;


            case cavaleiro.value = 'cav12':
                mostrarCavaleiro.innerHTML = '<br>Afrodite de Peixes. <br><br>'
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
    let selecao = window.document.getElementById('ouros')
    selecao.focus()
    selecao.value= 'cav01'

}



