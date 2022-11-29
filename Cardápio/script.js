/*Controlador de quantidade pizza Mussarela*/

function aumentar_mussarelaM(){
    var qtd = document.getElementById("quantidade_mussarelaM").value;
    qtd++;
    document.getElementById("quantidade_mussarelaM").value = qtd
}

function diminuir_mussarelaM(){
    var qtd = document.getElementById("quantidade_mussarelaM").value;
    qtd--;
    document.getElementById("quantidade_mussarelaM").value = qtd
}

function aumentar_mussarelaG(){
    var qtd = document.getElementById("quantidade_mussarelaG").value;
    qtd++;
    document.getElementById("quantidade_mussarelaG").value = qtd
}

function diminuir_mussarelaG(){
    var qtd = document.getElementById("quantidade_mussarelaG").value;
    qtd--;
    document.getElementById("quantidade_mussarelaG").value = qtd
}

/*Controlador de quantidade pizza Catupiry*/

function aumentar_catupityM(){
    var qtd = document.getElementById("quantidade_catupityM").value;
    qtd++;
    document.getElementById("quantidade_catupityM").value = qtd
}

function diminuir_catupityM(){
    var qtd = document.getElementById("quantidade_catupityM").value;
    qtd--;
    document.getElementById("quantidade_catupityM").value = qtd
}

function aumentar_catupityG(){
    var qtd = document.getElementById("quantidade_catupityG").value;
    qtd++;
    document.getElementById("quantidade_catupityG").value = qtd
}

function diminuir_catupityG(){
    var qtd = document.getElementById("quantidade_catupityG").value;
    qtd--;
    document.getElementById("quantidade_catupityG").value = qtd
}

/*Controlador de quantidade pizza Portuguesa*/

function aumentar_portuguesaM(){
    var qtd = document.getElementById("quantidade_portuguesaM").value;
    qtd++;
    document.getElementById("quantidade_portuguesaM").value = qtd
}

function diminuir_portuguesaM(){
    var qtd = document.getElementById("quantidade_portuguesaM").value;
    qtd--;
    document.getElementById("quantidade_portuguesaM").value = qtd
}

function aumentar_portuguesaG(){
    var qtd = document.getElementById("quantidade_portuguesaG").value;
    qtd++;
    document.getElementById("quantidade_portuguesaG").value = qtd
}

function diminuir_portuguesaG(){
    var qtd = document.getElementById("quantidade_portuguesaG").value;
    qtd--;
    document.getElementById("quantidade_portuguesaG").value = qtd
}

/*Controlador de quantidade pizza Calabresa*/

function aumentar_calabresaM(){
    var qtd = document.getElementById("quantidade_calabresaM").value;
    qtd++;
    document.getElementById("quantidade_calabresaM").value = qtd
}

function diminuir_calabresaM(){
    var qtd = document.getElementById("quantidade_calabresaM").value;
    qtd--;
    document.getElementById("quantidade_calabresaM").value = qtd
}

function aumentar_calabresaG(){
    var qtd = document.getElementById("quantidade_calabresaG").value;
    qtd++;
    document.getElementById("quantidade_calabresaG").value = qtd
}

function diminuir_calabresaG(){
    var qtd = document.getElementById("quantidade_calabresaG").value;
    qtd--;
    document.getElementById("quantidade_calabresaG").value = qtd
}

/*Controlador de quantidade Água*/

function aumentar_agua(){
    var qtd = document.getElementById("quantidade_agua").value;
    qtd++;
    document.getElementById("quantidade_agua").value = qtd
}

function diminuir_agua(){
    var qtd = document.getElementById("quantidade_agua").value;
    qtd--;
    document.getElementById("quantidade_agua").value = qtd
}

/*Controlador de quantidade Coca-Cola*/

function aumentar_coca(){
    var qtd = document.getElementById("quantidade_coca").value;
    qtd++;
    document.getElementById("quantidade_coca").value = qtd
}

function diminuir_coca(){
    var qtd = document.getElementById("quantidade_coca").value;
    qtd--;
    document.getElementById("quantidade_coca").value = qtd
}

/*Controlador de quantidade Fanta Laranja*/

function aumentar_fanta(){
    var qtd = document.getElementById("quantidade_fanta").value;
    qtd++;
    document.getElementById("quantidade_fanta").value = qtd
}

function diminuir_fanta(){
    var qtd = document.getElementById("quantidade_fanta").value;
    qtd--;
    document.getElementById("quantidade_fanta").value = qtd
}

/*Controlador de quantidade Suco*/

/*Laranja*/
function aumentar_laranja(){
    var qtd = document.getElementById("quantidade_laranja").value;
    qtd++;
    document.getElementById("quantidade_laranja").value = qtd
}

function diminuir_laranja(){
    var qtd = document.getElementById("quantidade_laranja").value;
    qtd--;
    document.getElementById("quantidade_laranja").value = qtd
}

/*Maracujá*/
function aumentar_maracuja(){
    var qtd = document.getElementById("quantidade_maracuja").value;
    qtd++;
    document.getElementById("quantidade_maracuja").value = qtd
}

function diminuir_maracuja(){
    var qtd = document.getElementById("quantidade_maracuja").value;
    qtd--;
    document.getElementById("quantidade_maracuja").value = qtd
}

/*Abacaxi*/
function aumentar_abacaxi(){
    var qtd = document.getElementById("quantidade_abacaxi").value;
    qtd++;
    document.getElementById("quantidade_abacaxi").value = qtd
}

function diminuir_abacaxi(){
    var qtd = document.getElementById("quantidade_abacaxi").value;
    qtd--;
    document.getElementById("quantidade_abacaxi").value = qtd
}

/*Botão de chamar o garçon*/
function chamar_garcon(){
    window.alert('Garçon solicitado. Aguarde um momento.');
}

/*Salvar itens escolhidos do cardápio*/ 
var btnProximo = document.querySelector('.proximo');

btnProximo.addEventListener('click', function(){
    var MussarelaM = document.querySelector("#quantidade_mussarelaM").value;
    localStorage.setItem('mussarelaM', MussarelaM);
})