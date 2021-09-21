const estados = ['Acre', 'Alagoas', 'Amapa',
'Amazonas', 'Bahia', 'Ceara', 'Distrito Federal',
'Espirito Santo', 'Goias', 'Maranhao', 'Mato grosso',
'Mato Grosso do Sul', 'Minas Gerais', 'Para', 'Paraiba',
'Parana', 'Pernambuco', 'Piaui', 'Rio de Janeiro',
'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondonia',
'Roraima', 'Santa Catarina', 'Sao Paulo', 'Sergipe', 'Tocantins',];


const nome = document.querySelector('#name')
const email = document.querySelector('#email')
const cpf = document.querySelector('#cpf')
const endereco = document.querySelector('#endereco')
const cidade = document.querySelector('#cidade')
const allStates = document.querySelector('#select-estados');
const moradia = document.querySelector('#moradia')
const curriculo = document.querySelector('#curriculo')
const cargo = document.querySelector('#cargo')
const descCargo = document.querySelector('#desc-cargo')
const date = document.querySelector('#date')
const submit = document.querySelector('#submit')
const inff = document.querySelector('#informations')



for (let index = 0; index < estados.length; index+= 1) {
    const createOption = document.createElement('option');
    createOption.className = 'option-states';
    createOption.innerText = estados[index];
    allStates.appendChild(createOption);    
}





function divInfos (event) {
    event.preventDefault();
    const info = [nome.value,email.value,cpf.value,endereco.value,cidade.value,allStates.value,curriculo.value,cargo.value,descCargo.value,date.value,]
    for (let index = 0; index < info.length; index+=1) {
        const createDiv = document.createElement('div');
        createDiv.className = 'infos';
        createDiv.innerText = info[index];
        inff.appendChild(createDiv);
        console.log(info)
    }
}








submit.addEventListener('click', divInfos);