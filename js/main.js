var timer

function iniciarContagem(){
    clearInterval(timer);
    var timeInSeconds = document.getElementById("tempoDeEntrada").value;
    var horas = Math.floor(timeInSeconds / 3600);
    var minutos = Math.floor((timeInSeconds % 3600) / 60);
    var segundos = (timeInSeconds % 3600) % 60;
    console.log(horas, minutos, segundos);
    timer = setInterval(countdown, 1000);

    function countdown(){
        // Decresce os segundos
        if(segundos == 0){
            segundos = 59;
            if(minutos == 0){ // Decresce os minutos
                minutos = 59;
                if(horas >= 1){ // Decresce os segundos
                    horas--;
                }
            }
            else{
                minutos--;
            }
        }
        else {
            segundos--;
        }
        
        if((horas == 0) && (minutos == 0) && (segundos == 0)){
            clearInterval(timer);
        }

        document.getElementById("relogio").innerHTML = convertNum(horas) + ":" 
            + convertNum(minutos) + ":" 
            + convertNum(segundos);
    }
}

function convertNum(num){
    return num > 9 ? "" + num: "0" + num;
}

function pausarContagem(){
    clearInterval(timer);
}