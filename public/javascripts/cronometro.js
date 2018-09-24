var cronometro = (function () {
    var segundo = 0+"0";
    var minuto = 0+"0";
    var hora = 0+"0";
    
    function tempo(tempo){    
    
           if(tempo != undefined){
               segundo = tempo.substring(6,8);
               minuto = tempo.substring(3,5);
               hora = tempo.substring(0,2);
           }
    
           if (segundo < 59){
               segundo++
               if(segundo < 10){segundo = "0"+segundo}
           }else
               if(segundo == 59 && minuto < 59){
                   segundo = 0+"0";
           minuto++;
           if(minuto < 10){minuto = "0"+minuto}
               }
           if(minuto == 59 && segundo == 59 && hora < 23){
               segundo = 0+"0";
               minuto = 0+"0";
               hora++;
               if(hora < 10){hora = "0"+hora}
           }else
               if(minuto == 59 && segundo == 59 && hora == 23){
                   segundo = 0+"0";
           minuto = 0+"0";
           hora = 0+"0";
               }
           return hora +":"+ minuto +":"+ segundo
    }
            
    function tempoTelefone(tempo){    
        return moment(tempo).format('hh:mm:ss');
    }
    
    return {
        tempo: tempo,
        tempoTelefon: tempoTelefone
    }

})();