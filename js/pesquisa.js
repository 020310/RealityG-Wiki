/*======================================================================

UpWeb
Pesquisa Principal

Responsável apenas por interpretar o texto pesquisado.

======================================================================*/


/*======================================================================
    INICIALIZAÇÃO
======================================================================*/

const formPesquisa = document.getElementById("searchForm");

const campoPesquisa = document.getElementById("search");


/*======================================================================
    PÁGINAS
======================================================================*/

const paginas = {

    itens: [
        "item",
        "itens",
        "items"
    ],

    perfil: [
        "perfil"
    ],

    titulos: [
        "titulo",
        "titulos",
        "títulos",
        "title",
        "titles"
    ]

};


/*======================================================================
    EVENTO
======================================================================*/

formPesquisa.addEventListener("submit", pesquisar);


/*======================================================================
    PESQUISAR
======================================================================*/

function pesquisar(event){

    event.preventDefault();

    const texto = campoPesquisa.value
        .trim()
        .toLowerCase();

    if(texto === ""){

        limparConteudo();

        return;

    }

    if(existePagina(texto)){

        return;

    }

    mostrarErro();

}


/*======================================================================
    VERIFICAR PÁGINA
======================================================================*/

function existePagina(texto){

    for(const pagina in paginas){

        if(paginas[pagina].includes(texto)){

            abrirPagina(pagina);

            return true;

        }

    }

    return false;

}


/*======================================================================
    ABRIR PÁGINA
======================================================================*/

function abrirPagina(nome){

    switch(nome){

        case "itens":

            trocarConteudo("<h2>📦 Página de Itens</h2>");

            break;

        case "perfil":

            trocarConteudo("<h2>👤 Página de Perfil</h2>");

            break;

        case "titulos":

            trocarConteudo("<h2>🏆 Página de Títulos</h2>");

            break;

    }

}

console.log("Pesquisa.js carregado!");
