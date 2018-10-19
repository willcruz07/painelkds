var socket = function () {
    let socket = io();
    let listadePedido = [];

    timerGeral(listadePedido);
    
    socket.on('enivoPedido', function (pedido) {
        pedido.tempoemTela = "00:00:00";
        pedido.index = `cards${listadePedido.length + 1}`;
        listadePedido.push(pedido);
        inserirPedido(pedido);
    });

    socket.on('pedidosAnteriores', function (pedidos) {
        alert(pedidos.length);
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
    if ($(`.${pedido.index}`).text() == pedido.config.tempoAlerta) 
        $(`.${pedido.index}`).closest('div.card').removeClass('bg-secondary').addClass('bg-warning')
    else 
        if ($(`.${pedido.index}`).text() == pedido.config.tempoCritico) 
            $(`.${pedido.index}`).closest('div.card').removeClass('bg-secondary').addClass('bg-danger');
};