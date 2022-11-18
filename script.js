function aumentar(){
    var qtd = document.getElementById("quantidade").value;
    qtd++;
    document.getElementById("quantidade").value = qtd
}

function diminuir(){
    var qtd = document.getElementById("quantidade").value;
    qtd--;
    document.getElementById("quantidade").value = qtd
}