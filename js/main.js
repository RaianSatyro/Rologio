function horas(){
    var agora = new Date()
    var hora = agora.getHours()
    var minutos = agora.getMinutes()
    var segundos = agora.getSeconds()

    if(hora < 10) hora = '0' + hora
    if(minutos < 10) minutos = '0' + minutos
    if(segundos < 10) segundos = '0' + segundos

    var rel = document.querySelector('.relogio')

    rel.innerHTML = `${hora}:${minutos}:${segundos}`

}

function initTime(){
    setInterval(horas, 1000)
}


