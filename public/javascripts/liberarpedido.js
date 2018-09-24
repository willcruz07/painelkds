var liberarPedido = function () {
    $(document).on('keyup', function (e) {        
        if ($('main').hasClass('inserindo-pedido') || $('main').hasClass('em-uso'))
            return false;        
    });
}();