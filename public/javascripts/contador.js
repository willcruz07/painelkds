var tempo = new Number();
var calcularMinuto = new Number();
var min = 0;  
tempo = 0;
calcularMinuto = 0;

startContador();

function startContador () {    
    var hora = parseInt(tempo / 3600);        
    var seg = tempo % 60;    

    if (min < 60) {
        min = parseInt(calcularMinuto / 60);        
    } else {
        calcularMinuto = 0;
        min = 0;
    }

    if (min < 10 ) {
        min  = "0" + min;        
    };  

    if (seg <= 9 ) {
        seg = "0" + seg;
    };

    if (hora < 10 ) {
        hora = "0" + hora;
    };

    horaImprimivel = hora + ":" + min + ":" + seg;

    $(".contador").html(horaImprimivel);

    // setTimeout('startContador()', 1000);    

    calcularMinuto ++;  
    tempo ++;
};

