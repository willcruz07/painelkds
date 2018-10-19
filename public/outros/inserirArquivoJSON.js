module.exports = function (io) {
    const watch = require('node-watch');
    let watcher = watch('./integracaoJSON', {recursive: true});

    watcher.on('change', function (evt, name) {
        if (evt == 'update')
            lerArquivoJSON(io);
    });
    watcher.close();
};

function lerArquivoJSON (io) {
    const fs = require('fs');
    const diretorioIntegracao = "./integracaoJSON/";
    let verificardiretorioArquivos = fs.readdirSync(diretorioIntegracao);

    verificardiretorioArquivos.forEach(function (nomeArquivo) {
        fs.readFile(diretorioIntegracao + nomeArquivo, 'utf8', function (err, data) {
            if (err)
                throw 'Erro ao ler o arquivo: ' + nomeArquivo;
            enviarArquivoparaoFrontEnd(io, data);
            removerArquivodaPasta(diretorioIntegracao + nomeArquivo);
        });
    });
};

function enviarArquivoparaoFrontEnd (io, data) {
    let pedido = JSON.parse(data)
    io.sockets.emit('enivoPedido', {
        hora: pedido.hora,
        pedido: pedido.pedido,
        status: pedido.status,
        server: pedido.server,
        usuario: pedido.usuario,
        destino: pedido.destino,
        observacao: pedido.observacao,
        itens: pedido.itens,
        config: getConfig()
    });
};

function getConfig () {
    const fs = require('fs');
    let arquivo = fs.readFileSync('./config.json', 'utf8');
    let config = JSON.parse(arquivo);
    return config;
};

function removerArquivodaPasta (dirArquivo) {
    const fs = require('fs');
    fs.unlinkSync(dirArquivo);
};