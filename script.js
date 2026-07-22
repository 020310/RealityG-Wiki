/*======================================================================

UpWeb
Desenvolvido por Leandro

=======================================================================

ARQUIVO PRINCIPAL

Este arquivo controla o funcionamento geral do UpWeb.

REGRAS

1. Nunca colocar sistemas específicos aqui.
2. Apenas inicializações.
3. Facilitar futuras expansões.
4. Todo módulo deve utilizar as funções deste arquivo.

======================================================================*/


/*======================================================================
    CONFIGURAÇÕES
======================================================================*/

const UpWeb = {

    nome: "UpWeb",

    versao: "1.0.0"

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

    console.log("==========================================");
    console.log("             UpWeb iniciado");
    console.log("==========================================");

    console.log("Sistema:", UpWeb.nome);
    console.log("Versão :", UpWeb.versao);

    focarPesquisa();

}


/*======================================================================
    PESQUISA
======================================================================*/

function focarPesquisa(){

    const campo = document.getElementById("search");

    if(campo){

        campo.focus();

    }

}


/*======================================================================
    CONTEÚDO
======================================================================*/

function trocarConteudo(html){

    const area = document.getElementById("content");

    if(!area){

        console.error("Área #content não encontrada.");

        return;

    }

    area.innerHTML = html;

}


/*======================================================================
    LIMPAR CONTEÚDO
======================================================================*/

function limparConteudo(){

    trocarConteudo("");

}


/*======================================================================
    MENSAGEM DE ERRO
======================================================================*/

function mostrarErro(){

    trocarConteudo(`

        <div class="noResult">

            <h1>🔍</h1>

            <h2>Nenhum resultado encontrado</h2>

            <p>
                Verifique a ortografia<br>
                ou tente outra pesquisa.
            </p>

        </div>

    `);

}


/*======================================================================
    FUTUROS MÓDULOS

    carregarItens()
    carregarPerfil()
    carregarTitulos()

======================================================================*/
