var pedido = document.querySelector("#pedido");

addEventListener("unload", function(){
    pedido.textContent = localStorage.getItem('MussarelaM');
})