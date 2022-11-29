var btnVerPedido = document.querySelector("#verPedido");

btnVerPedido.addEventListener("click", function(){
    var pedido = document.querySelector("#pedido");
    pedido.textContent = localStorage.getItem('MussarelaM');
})

/*Cancelar pedido*/
function cancelar_pedido(){
    window.alert('Pedido cancelado com sucesso!');
}