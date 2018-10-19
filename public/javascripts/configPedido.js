var config = function configPedido() {
    let socket = io();

    socket.on('getConfig', function (config) {
        $('#tempoAlerta').val(config.tempoAlerta);
        $('#tempoCritico').val(config.tempoCritico);
    });

    $('.saveConfig').click(function () {
        socket.emit('envioConfiguracoes', {
            tempoAlerta: formartaTempodoPedido($('#tempoAlerta').val()),
            tempoCritico: formartaTempodoPedido($('#tempoCritico').val())
        });
    });
}();

function formartaTempodoPedido (tempo) {
    if (tempo.length <= 5) 
        return tempo + ":00"        
    else 
        return tempo
};