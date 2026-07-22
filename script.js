/*==========================================================

UpWeb

Pesquisa Principal

Responsável apenas pela barra de pesquisa.

==========================================================*/


/*==========================================================
    INICIALIZAÇÃO
==========================================================*/

const pesquisa = document.getElementById("search");

pesquisa.addEventListener("keydown", pesquisar);


/*==========================================================
    PESQUISA
==========================================================*/

function pesquisar(event){

    if(event.key !== "Enter") return;

    const texto = pesquisa.value
        .trim()
        .toLowerCase();

    switch(texto){

        case "item":
        case "items":
        case "itens":

            trocarConteudo("<h2>Itens</h2>");

            break;

        case "perfil":

            trocarConteudo("<h2>Perfil</h2>");

            break;

        case "titulo":
        case "titulos":
        case "títulos":
        case "title":
        case "titles":

            trocarConteudo("<h2>Títulos</h2>");

            break;

        default:

            mostrarErro();

    }

}


/*==========================================================
    TELA DE ERRO
==========================================================*/

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
