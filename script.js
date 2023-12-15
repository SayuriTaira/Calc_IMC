const inputWeight = document.getElementById('weight')
const inputHeight = document.getElementById('height')
const inputGenderMale = document.querySelector('#homem')
const inputGenderFemale = document.querySelector('#mulher')

inputWeight.addEventListener('input', function () {
    this.value = this.value.replace(/\D/g, ''); // Remove tudo que não for número
})

inputHeight.addEventListener('input', function () {
    this.value = this.value.replace(/\D/g, ''); // Remove tudo que não for número
});

function calcImc() {
    const weight = document.getElementById('weight').value
    const height = document.getElementById('height').value

    const imcResult = document.querySelector('.imc-result')
    const result = document.querySelector('.result')

    const classification = document.querySelector('.classification')

    const heightInMeters = height / 100

    if(weight > 0 && height > 0 && inputGenderMale.checked || inputGenderFemale.checked) {
        const imc = weight / (heightInMeters * heightInMeters)
        imcResult.innerText = 'Seu IMC é'
        imcResult.style.color = 'black'
        imcResult.style.fontSize = '20px'
        const imcNumber = imc.toFixed(1)
        result.innerText = imcNumber

        if(imcNumber < 18.5) {
            classification.innerText = 'Abaixo do peso normal'
        } else if (imcNumber >= 18.5 && imcNumber <= 24.9) {
            classification.innerText = 'Peso normal'
        } else if (imcNumber >= 25 && imcNumber <= 29.9) {
            classification.innerText = 'Excesso de peso'
        } else if (imcNumber >= 30 && imcNumber <= 34.9) {
            classification.innerText = 'Obesidade classe |'
        } else if (imcNumber >= 35 && imcNumber <= 39.9) {
            classification.innerText = 'Obesidade classe ||'
        } else {
            classification.innerText = 'Obesidade classe |||'
        }

    } else {
        imcResult.innerText ='Por favor, preencha todos os campos'
        imcResult.style.color = 'red'
        imcResult.style.fontSize = '16px'
        result.innerText = ''
        classification.innerText = ''
    }

    inputWeight.value = ''
    inputHeight.value = ''
    inputGenderMale.checked = false
    inputGenderFemale.checked = false
}


