
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
  'Você quer namorar comigo ?':{
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

  outputString += `<p>${name}, de ${age} anos, ${maritalStatus}, anamnse preenchida em ${horario}, baseada nas respostas anteriores do formulário respondido por você, estamos oficialmente NAMORANDO! E vamos exportar essa Anamnese em PDF para deixar salvo </p>`;

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
