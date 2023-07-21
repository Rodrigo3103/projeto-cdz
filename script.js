

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


