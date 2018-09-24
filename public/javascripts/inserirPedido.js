function inserirPedido (pedido) {
    let divCardText = ''; 

    $.each(pedido.itens, function (index, item) {
        let observacao = '';              

        if (item.observacao !== '')
            observacao = `<br><label class="form-check-label"> ${item.observacao}  </label>`

        divCardText += `<div class="form-check">
                            <label class="form-check-label">
                                <input type="checkbox" class="form-check-input" name="${item.nome}" id="${item.id}" value="checkedValue">                                    
                                ${item.quantidade} - ${item.nome}                                                                      
                            </label>
                            ${observacao}                                                                                                             
                        </div>`;                
    });        

    $()

    $('.row').append(                
        `<form>
            <div class="card text-white bg-secondary">
                <div class="card-header ">
                    <h5> Pedido ${pedido.pedido} </h5>                     
                    <span class="spanLeft"> Mesa: ${pedido.destino} </span> 
                    <span class="spanRight"> Hora: ${pedido.hora} </span>                       
                </div>
                <div class="card-body">
                    <div class="card-text">
                        ${divCardText}
                    </div>
                </div>
                <div class="card-footer">
                    <span class="garcom spanLeft"> Garçom: ${pedido.usuario} </span>                    
                    <span class="contador spanRight"> ${pedido.tempoemTela} </span>                    
                </div>
            </div>
        </form>`
    );    
};