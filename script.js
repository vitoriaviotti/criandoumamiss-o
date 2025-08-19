const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "Você acaba de assistir a um documentário sobre os impactos do aquecimento global no planeta. Qual é o seu primeiro pensamento?",
    alternativas: [
      {
        texto: "É um problema muito sério, precisamos agir rapidamente!",
        afirmacao: "Você ficou preocupado com a velocidade das mudanças climáticas e se comprometeu a adotar hábitos mais sustentáveis."
      },
      {
        texto: "Não acredito que o aquecimento global seja tão grave assim.",
        afirmacao: "Você ficou cético, mas se comprometeu a pesquisar mais sobre o assunto para entender melhor."
      }
    ]
  },
  {
    enunciado: "Em sua escola, está sendo discutido um novo projeto sobre reciclagem e redução de resíduos. Como você participa?",
    alternativas: [
      {
        texto: "Apoio totalmente! Vou ajudar a organizar as campanhas de reciclagem.",
        afirmacao: "Você começou a se envolver com atividades de sustentabilidade e está ajudando a implementar ações na sua escola."
      },
      {
        texto: "Não sei se isso vai fazer diferença. Não vou me envolver.",
        afirmacao: "Você se manteve afastado, achando que iniciativas como essa não teriam muito impacto."
      }
    ]
  },
  {
    enunciado: "Uma nova tecnologia foi criada para reduzir o desperdício de alimentos, transformando sobras em compostagem. Como você reage?",
    alternativas: [
      {
        texto: "Essa tecnologia pode realmente ajudar o planeta! Vou usá-la sempre que possível.",
        afirmacao: "Você ficou empolgado com a ideia e começou a implementar a compostagem em sua casa."
      },
      {
        texto: "Não vejo necessidade disso. Não sei se vai funcionar de verdade.",
        afirmacao: "Você ainda está em dúvida, mas está aberto a ver como essa tecnologia pode ser aplicada no futuro."
      }
    ]
  },
  {
    enunciado: "Você precisa decidir um destino de viagem, mas está ciente dos impactos ambientais causados pelo turismo. O que você faz?",
    alternativas: [
      {
        texto: "Escolho destinos ecológicos e sustentáveis para reduzir o impacto ambiental.",
        afirmacao: "Você se compromete a viajar de forma mais consciente, priorizando ecoturismo e viagens mais sustentáveis."
      },
      {
        texto: "Prefiro escolher o destino mais barato, sem me preocupar tanto com o impacto ambiental.",
        afirmacao: "Você se preocupa menos com os impactos e foca mais no custo-benefício da viagem."
      }
    ]
  },
  {
    enunciado: "Um amigo seu sugere plantar árvores como forma de combater a poluição do ar. O que você faz?",
    alternativas: [
      {
        texto: "Apoio a ideia e juntos começamos um projeto de plantio em nossa cidade.",
        afirmacao: "Você ficou empolgado e começou um movimento local para plantar mais árvores na sua comunidade."
      },
      {
        texto: "Plantar árvores não vai resolver o problema. Acredito que precisamos de ações maiores.",
        afirmacao: "Você se mantém cético, acreditando que iniciativas isoladas não são suficientes para resolver o problema global."
      }
    ]
  }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.textContent = "";
  mostraAlternativas();
}

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa.texto;
    botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botaoAlternativas);
  }
}

function respostaSelecionada(opcaoSelecionada) {
  const afirmacoes = opcaoSelecionada.afirmacao;
  historiaFinal += afirmacoes + " ";
  atual++;
  mostraPergunta();
}

function mostraResultado() {
  caixaPerguntas.textContent = "O futuro do meio ambiente está em suas mãos...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
}

mostraPergunta();

