const app = require('./config/server');
const routeIndex = require('./routes/index')(app);

const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.set('io', io);

const watch = require('./public/outros/inserirArquivoJSON')(io);
const saveConfig = require('./public/outros/configuracoes')(io);
const liberacaoPedido = require('./public/outros/liberacaoPedido')(io);

server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000...');
});