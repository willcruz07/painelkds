function inserirPedido (pedido) {
    let divCardText = ''; 

    $.each(pedido.itens, function (index, item) {
        let observacao = '';              

        if (item.observacao !== '')
            observacao = `<br><label class="form-check-label"> ${item.observacao}  </label>`

            divCardText += `<li><input type="checkbox" class="form-check-input" onfocus="adicionarfundo(e)" onfocusout="removerfundo(e)" name="${item.nome}" id="${item.id}" value="checkedValue"/> <label class="form-check-label"> ${item.quantidade} - ${item.nome}</label> ${observacao} </li>`;

        // divCardText += `<div class="form-check">                        
        //                     <ul class="checkbox">
        //                     <label class="form-check-label">
        //                         <input type="checkbox" class="form-check-input" name="${item.nome}" id="${item.id}" value="checkedValue">
        //                         ${item.quantidade} - ${item.nome}
        //                     </label>
        //                     ${observacao}                        
        //                     </ul>
        //                 </div>`;
    });        

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
                        <div class="label">
                            <ul class="checkbox">
                                ${divCardText}
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <span class="garcom spanLeft"> ${pedido.usuario} </span>                    
                    <span class="${pedido.index} spanRight"> ${pedido.tempoemTela} </span>                    
                </div>
            </div>
        </form>`
    );    
  
    // $('.row').append(                
    //     `<form>
    //         <div class="card text-white bg-secondary">
    //             <div class="card-header ">
    //                 <h5> Pedido ${pedido.pedido} </h5>                     
    //                 <span class="spanLeft"> Mesa: ${pedido.destino} </span> 
    //                 <span class="spanRight"> Hora: ${pedido.hora} </span>                       
    //             </div>
    //             <div class="card-body">
    //                 <div class="card-text">
    //                     ${divCardText}
    //                 </div>
    //             </div>
    //             <div class="card-footer">
    //                 <span class="garcom spanLeft"> ${pedido.usuario} </span>                    
    //                 <span class="${pedido.index} spanRight"> ${pedido.tempoemTela} </span>                    
    //             </div>
    //         </div>
    //     </form>`
    // );    
};