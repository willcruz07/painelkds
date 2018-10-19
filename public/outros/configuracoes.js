module.exports = function (io) {
    const fs = require('fs');

    io.on('connection', function (socket) {
        let config = JSON.parse(fs.readFileSync('./config.json'));
        socket.emit('getConfig', {
            tempoAlerta: config.tempoAlerta,
            tempoCritico: config.tempoCritico
        });

        socket.on('envioConfiguracoes', function (config) {
            let configJSON = JSON.stringify(config);
            fs.writeFileSync('./config.json', configJSON);
        });
    });
};