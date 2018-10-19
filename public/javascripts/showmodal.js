var showmodal = function () {
    $(document).on('keyup', function (e) {
        let enter = 13        

        if ($('main').hasClass('inserindo-pedido') || $('main').hasClass('em-uso'))
            return false

        if ((e.keyCode === enter) && ($('.selecionado')) ) {
            $('main').addClass('em-uso')

            let listachecked = [];
            let lista = '<li> </li>';
            let conteudodamensagem = '';
            let numeroPedido = '';

            $.each($('.selecionado').find('input:checkbox'), function (i) {
                if (!$('.selecionado').find('input:checkbox').eq(i).prop('checked')) 
                    listachecked.push('<li>' + $('.selecionado').find('label').eq(i).text() + '</li>');
            });

            $.each(listachecked, function (index, value) {
                lista = value + lista;            
            });

            numeroPedido = $('.selecionado').find('h5').text();

            if (listachecked.length > 0)
                conteudodamensagem = `<h5> Os seguintes pedidos ainda estão em aberto:  </h5>
                                            <ul>
                                                ${lista}
                                            </ul>`;

            $.confirm({
                theme: 'supervan',
                columnClass: 'col-md-12',
                title: `<h2> Confima a liberação do "${numeroPedido}" ? </h2>`,
                content:`<div> ${conteudodamensagem} </div>`,
                buttons: {
                    sim: { 
                        text:['Sim (Enter)'],
                        action: function () {
                                $('main').removeClass('em-uso');
                                var index = 0;

                                $.each($('.card'), function (i) {
                                    if ($(this).hasClass('selecionado'))
                                        index = i;
                                });

                                $('.selecionado').fadeOut('slow', function () {
                                    liberarPedidoJSON();
                                    $(this).remove('div');                                    
                                });

                                $.each($('.card'), function (i) {
                                    if ((index - 1) === i) {
                                        ($(this).addClass('selecionado'))
                                    };
                                });
                            },
                        },

                    nao: {
                        text: ['Não (Esc)'],
                        action: function () {
                            $('main').removeClass('em-uso');
                            },
                        },
                    },
                draggable: false
            });
        };
    });
}();

function liberarPedidoJSON() {            
    let itens = [];
    let socket = io();
    let data = new Date();    
    let horaAtual = data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds();

    $('.selecionado').find('.custom-checkbox').each(function () {
        let item = {};
        item.nome = $(this).find('.nomeItem').text();
        item.quantidade = $(this).find('.qtItem').text();
        item.observacao = $(this).find('.obsItem').text();
        item.check =  $(this).find('input:checkbox').is(':checked');
        itens.push(item);
    });

    socket.emit('liberacaoPedido', {
        pedido: $('.selecionado').find('.nrPedido').text(),
        destino: $('.selecionado').find('.nrMesa').text(),
        horaPedido: $('.selecionado').find('.hrPedido').text(),
        usuario: $('.selecionado').find('.garcom').text(),
        tempoPreparo: $('.selecionado').find('.tempoTela').text(),        
        liberado: horaAtual,
        itens: itens
    });
};

var modalconfirma = function () {
    $(document).on('keyup', function (e) {
        let enter = 13;
        let esc = 27;

        if ($('main').hasClass('inserindo-pedido'))
            return false;

        $.each($('div'), function () {
            if ($(this).hasClass('jconfirm-buttons'))
                switch(e.keyCode) {
                    case enter: $('.jconfirm-buttons').find('button').eq(0).click();
                    case esc: $('.jconfirm-buttons').find('button').eq(1).click();
            };
        });
    });
}();