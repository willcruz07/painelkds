var socket = function () {
    let socket = io();
    let index = 0;
    let listadePedido = [];

    timerGeral(listadePedido);

    socket.on('enivoPedido', function (pedido) {                
        pedido.tempoemTela = "00:00:00";
        pedido.index = `cards${listadePedido.length + 1}`;
        listadePedido.push(pedido);
        inserirPedido(pedido);                         
    });
}();

function timerGeral(listadePedido){    
    setInterval(function(){       
        listadePedido.forEach(pedido => {
            pedido.tempoemTela = cronometro.tempo(pedido.tempoemTela);   
            $(`.${pedido.index}`).text(pedido.tempoemTela)            
            alertaportempodePedido(pedido);
        });        
    }, 1000);   
};

function alertaportempodePedido(pedido) {
    if ($(`.${pedido.index}`).text() == "00:00:10") {
        $(`.${pedido.index}`).closest('div.card').removeClass('bg-secondary').addClass('bg-warning');
    } else if ($(`.${pedido.index}`).text() == "00:00:20") {
        $(`.${pedido.index}`).closest('div.card').removeClass('bg-secondary').addClass('bg-danger');
    }
};

function adicionarfundo(e) {
    alert(e)
};

