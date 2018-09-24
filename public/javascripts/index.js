var socket = function () {
    let socket = io();
    let listadePedido = [];
  
    socket.on('enivoPedido', function (pedido) {                
        pedido.tempoemTela = "00:00:00";
        inserirPedido(pedido);        
        listadePedido.push(pedido);                               
        timerGeral(listadePedido);
    });              
}();

function timerGeral(listadePedido){
    
    setInterval(function(){        
        $.each(listadePedido, function (lindex, pedido) {                      
            $('.contador').each(function (index) {                
                if (lindex == index) { 
                    pedido.tempoemTela = cronometro.tempo(pedido.tempoemTela);                                                                                           
                    $(this).find('.contador').html(pedido.tempoemTela);
                }
            });
        });        
    }, 1000);
};
