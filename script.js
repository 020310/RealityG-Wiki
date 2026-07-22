/*======================================================================

UpWeb
Desenvolvido por Leandro

=======================================================================

ARQUIVO PRINCIPAL

Este arquivo controla o funcionamento geral do UpWeb.

REGRAS

1. Nunca colocar sistemas específicos aqui.
2. Apenas inicializações.
3. Chamar outros módulos.
4. Facilitar futuras expansões.

======================================================================*/


/*======================================================================
    OBJETO PRINCIPAL
======================================================================*/

const UpWeb = {

    version: "1.0",

    name: "UpWeb"

};


/*======================================================================
    INICIALIZAÇÃO
======================================================================*/

document.addEventListener("DOMContentLoaded", iniciarSistema);


/*======================================================================
    INICIAR SISTEMA
======================================================================*/

function iniciarSistema(){

    console.clear();

    console.log("=======================================");
    console.log("          UpWeb iniciado");
    console.log("=======================================");

    mostrarVersao();

    focarPesquisa();

}


/*======================================================================
    MOSTRAR VERSÃO
======================================================================*/

function mostrarVersao(){

    console.log("Sistema:", UpWeb.name);

    console.log("Versão:", UpWeb.version);

}


/*======================================================================
    FOCO NA PESQUISA
======================================================================*/

function focarPesquisa(){

    const pesquisa = document.getElementById("search");

    if(!pesquisa) return;

    pesquisa.focus();

}


/*======================================================================
    TROCAR CONTEÚDO
======================================================================*/

function trocarConteudo(html){

    const area = document.getElementById("content");

    if(!area) return;

    area.innerHTML = html;

}


/*======================================================================
    LIMPAR CONTEÚDO
======================================================================*/

function limparConteudo(){

    trocarConteudo("");

}


/*======================================================================
    FUTUROS MÓDULOS

    carregarItens()

    carregarPerfil()

    carregarTitulos()

    carregarConfiguracoes()

======================================================================*/
