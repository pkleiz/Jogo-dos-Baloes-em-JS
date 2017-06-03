var timerId = null; //variável que armazena a chamada da função timeout

function Jogo()
{
    var nivel_jogo = document.getElementById('nivel_jogo').value;

    window.location.href = 'jogo.html?'+nivel_jogo;

}
function comecajogo()
{

    var url = window.location.search;

    var nivel_jogo = url.replace("?", "");

    var tempo_segundos = 0;

    if(nivel_jogo == 1) { //1 fácil -> 120segundos
        tempo_segundos = 120;
    }

    if(nivel_jogo == 2) { //2 normal -> 60segundos
        tempo_segundos = 60;
    }

    if(nivel_jogo == 3) { //3 difícil -> 30segundos
        tempo_segundos = 30;
    }

    //inserindo segundos no span
    document.getElementById('cronometro').innerHTML = tempo_segundos;

    // quantidade de balões
    var qtde_baloes = 190;

    cria_baloes(qtde_baloes);

    //imprimir baloes inteiros
    inteiros = document.getElementById('baloes_inteiros').innerHTML = qtde_baloes;

    //imprimir baloes estourados
    document.getElementById('baloes_estourados').innerHTML = 0;

    contagem_tempo(tempo_segundos+1);

}

function cria_baloes(qtde_baloes)
{
    for(var i = 1;i<=qtde_baloes;i++)
    {
        var balao = document.createElement("img");

        balao.src= 'imagens/balao_azul_pequeno.png';
        document.getElementById('cenario').appendChild(balao);
        
    }
}

function contagem_tempo(segundos)
{
    if(segundos==-1)
    {
        clearTimeout(timerId);
        game_over();
        return false;
    }
    segundos=segundos-1;
    document.getElementById('cronometro').innerHTML = segundos;
    timerId = setTimeout("contagem_tempo("+segundos+")",1000);

}
function game_over()
{
    alert("Fim de jogo, você é muito ruim");
}