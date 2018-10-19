function inserirPedido (pedido) {
    let divCardText = '';
    let mesa = '';
    let garcom = '';

    if (pedido.destino == 0) 
        mesa = `Balcão`
    else 
        mesa = `Mesa: ${pedido.destino}`;
    
    if (pedido.usuario !== 'Balcão')
        garcom = pedido.usuario;

    $.each(pedido.itens, function (index, item) {
        let observacao = '';

        if (item.observacao !== '')
            observacao = `<br> >> ${item.observacao}`;

        divCardText += `<li>
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" name="${item.nome}" id="${item.id}"/>
                                <label for="${item.id}" class="custom-control-label"><span class="qtItem">${item.quantidade}</span> - <span class="nomeItem">${item.nome}</span>  <span class="obsItem">${observacao}</span></label>
                            </div>
                        </li>`;
    });

    $('.teladePedidos').append(
        `<form>
            <div class="card text-white bg-secondary">
                <div class="card-header ">
                    <h5>Pedido <span class="nrPedido">${pedido.pedido}</span></h5>
                    <span class="spanLeft nrMesa">${mesa}</span>
                    <span class="spanRight">Hora: <span class="hrPedido">${pedido.hora}</span></span>
                </div>
                <div class="card-body">
                    <div class="card-text">
                        <ul class="checkbox">${divCardText}</ul>
                    </div>
                </div>
                <div class="card-footer">
                    <span class="spanLeft garcom">${garcom}</span>
                    <span class="${pedido.index} spanRight tempoTela">${pedido.tempoemTela}</span>
                </div>
            </div>
        </form>`
    );
};