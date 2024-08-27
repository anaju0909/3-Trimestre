const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
{
    enunciado: "Quantos planetas existem no sistema solar?",
    alternativas: [
        {
            texto:"9 planetas",
            afirmacao: "afirmação 1"
        },
        {
        texto:"8 planetas",
        afirmacao: "afirmação 2"
        }
    ]
},

{
    enunciado: "Qual planeta é mais próximo do sol?",
    alternativas: [
        {

        texto: "Terra: "afirmação 3"
        },
        {
        texto:"Mercúrio",
        afirmacao: "afirmação 4"
        }
    ]
},

{
    enunciado: "Os planetas gasosos são compostos por gases, como hidrogênio e hélio. Qual o nome do maior planeta gasoso do Sistema Solar?",
    alternativas: [
        {
        texto:"Marte",
        afirmacao: "afirmação 5"
        },
        {
        texto:"Saturno",
        afirmacao: "afirmação 6"
        }
    ]
}

]
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraResultado();
        return; 
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", ()=> respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}
function mostraResultado(){
caixaPerguntas.textContent = "Suas ações mudam o mundo!";
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
}

mostraPergunta();
