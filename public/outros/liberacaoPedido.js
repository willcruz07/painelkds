module.exports = function (io) {
    const fs = require('fs');
    const date = new Date();
    const mes = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    const dia = date.getDate() + '-' + mes[date.getMonth()];
    const diretorio = './liberacaoPedidos/' + dia;

    io.on('connection', function (socket) {
        socket.on('liberacaoPedido', function (dados) {
            if (fs.existsSync(diretorio))
                salvarPedidoLiberado(fs, diretorio, dados);
            else {
                fs.mkdirSync(diretorio);
                salvarPedidoLiberado(fs, diretorio, dados);
            }
        });
    });
};

function salvarPedidoLiberado(fs, diretorio, dados) {
    var hora = dados.liberado;    
    let arquivo = diretorio + '/' + dados.pedido + '-' + hora.replace(/[^\d]+/g,'') + '.json';
    let pedido = JSON.stringify(dados);
    fs.writeFileSync(arquivo, pedido);
};