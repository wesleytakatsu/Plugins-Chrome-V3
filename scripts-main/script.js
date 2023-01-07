// https://anobjectisa.com/?p=410

chrome.runtime.onInstalled.addListener(() => {
    //  ESTE CÓDIGO JAVASCRIPT RODA APENAS UMA VEZ QUANDO
    //  SE INSTALA O PLUGIN A NÃO SER QUE ELE SEJA REINSTALADO
    //  ÓTIMO PARA FAZER REGISTROS E CONFIGURAÇÕES INICIAIS
});


function carregapartes(){
    $('#navbar.html').load("navbar.html.html");
}

carregapartes()