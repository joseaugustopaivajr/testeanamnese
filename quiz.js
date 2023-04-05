
const form = document.getElementById('form');
const output = document.getElementById('output');
const downloadButton = document.getElementById('download-button');

const database = {
  'Você está se sentindo bem hoje?': {
    sim: 'Ótimo! Fico feliz em ouvir isso.',
    não: 'Sinto muito em ouvir isso.',
  },
  'Você tem alguma dor ou desconforto?': {
    sim: 'Sinto muito em ouvir isso. Você deveria considerar consultar um médico.',
    não: 'Ótimo! Continue assim.',
  },
  'Você tem algum problema de saúde crônico?': {
    sim: 'Sinto muito em ouvir isso. Você deveria considerar consultar um médico para discutir as opções de tratamento.',
    não: 'Ótimo! Continue assim.',
  },
  'Você tem algum histórico familiar de doenças crônicas?':{
	sim: 'Você deve ser mais cuidadoso com sua saúde. Consulte um médico regularmente.',
	não: 'Ótimo! Continue assim.',
  },
  'Você tem uma dieta saudável e equilibrada?':{
	sim: 'Isso é ótimo! Sua saúde irá agradecer.',
	não: 'Você deve tentar melhorar sua dieta para melhorar sua saúde.',
  },
  'Você faz exercícios regularmente?':{
	sim: 'Isso é ótimo! Continue assim para manter sua saúde em dia.',
	não: 'Você deve tentar incorporar exercícios regulares em sua rotina para melhorar sua saúde.',
  },
  'Você fuma ou consome álcool regularmente?':{
	sim: 'Você deve considerar reduzir ou parar de fumar/beber para melhorar sua saúde.',
	não: 'Ótimo! Continue assim.',
  },
  'Tem dificiuldade de cicatrização?':{
	sim: 'Você deve considerar consultar um médico para discutir as opções de tratamento.',
	não: 'Isso é ótimo'
  },
  'BEATRIZ LEITE DE CASTRO GOUVEA VOCÊ QUER NAMORAR COMIGO? ?':{
	sim: 'Te amo <3',
	sim: 'Te amo <3'
  },
};

function askQuestion(question, answers) {
  let response;

  do {
    response = prompt(`${question}\n${Object.keys(answers).join(', ')}`);
  } while (!(response in answers));

  return answers[response];
}

function generateOutput(name, age, maritalStatus, horario) {
  const questions = Object.keys(database);
  let outputString = `<h2>Diagnóstico personalizado para ${name}, ${age} anos, ${maritalStatus}:</h2>`;

  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const answers = database[question];
    const response = askQuestion(question, answers);

    outputString += `<p>${question} <strong>${response}</strong></p>`;
  }

  outputString += `<p>${name}, de ${age} anos, ${maritalStatus}, anamnse preenchida em ${horario}, baseada nas respostas anteriores do formulário respondido por você, estamos oficialmente NAMORANDO! E vamos exportar essa Anamnese em PDF para deixar salvo </p><p>Bom, sabemos que não sou bom em palavras, principalmente no Português não é? Aqui estamos, ainda tentando entender o que está acontecendo, mas com uma certeza, é você e por muito tempo será você. As vezes nós dois procuramos entender porque tão rápido e porque tão intenso? Eu como o nerd dessa relação tentei buscar as explicações no google ou no chatGPT e encontrei algumas coisas que no fundo fazem sentido : 
Sobre os números ímpares, primeiro encontro, tudo o que acontece sempre tem um numero ímpar e aqui tem uma pequena explicação, "Por conta da influência do número 7, o 17 está muito ligado ao despertar espiritual. Assim, quando o assunto é amor, você procura por uma vida a dois equilibrada e emocional." e logo depois temos um outro significado para o número 7 e esse sim condiz o que eu sempre digo para você "Nossa conexão é uma coisa de outra vida", vamos lá no significado rapidinho "O número 7 está associado à espiritualidade, à introspecção e ao ocultismo, relacionando-se com a reflexão e a sabedoria, com a busca dispostas sobre o mistério da vida." com base nessas pesquisas que fiz tive a minha própria conclusão que é, tenho certeza que tudo o que aconteceu e o que vai acontecer tem que ser com você, você é uma pessoa incrível que não consigo encontrar adjetivos para expressar o que eu sinto por você, dizem que isso é o significado do amor, não conseguir qualificar em palavras mas sim em sentimentos, você me disse uma vez que eu sou o tipo de homem que você deseja construir uma familia, mas saiba que você é a mulher que sempre pedi em minhas orações! Provavelmente nesta parte estarei chorando, então saiba que eu te amo e POR MAIS QUE ESTEJA QUERENDO ME MATAR, eu sempre te amarei ❤️</p>` ;

  return outputString;
}

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = this.elements['name'].value;
  const age = this.elements['age'].value;
  const maritalStatus = this.elements['maritalStatus'].value;
  const horario = new Date().toLocaleString();
  

  output.innerHTML = generateOutput(name, age, maritalStatus, horario);
  
  downloadButton.addEventListener('click', function() {
  if (confirm("Você deseja baixar o diagnóstico em PDF ou imagem?")) {
    const outputElement = document.getElementById('output');
    html2canvas(outputElement).then(function(canvas) {
      const image = canvas.toDataURL();
      const link = document.createElement('a');
      link.download = 'output.png';
      link.href = image;
      link.click();
    });
  }
});

  
});
