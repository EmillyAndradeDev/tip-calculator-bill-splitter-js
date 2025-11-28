const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

function calculateTip() {
    //aptura de valores
    let bill = parseFloat(document.getElementById('billAmount').value);
    let percent = parseFloat(document.getElementById('tipPercentage').value);
    let people = parseInt(document.getElementById('splitCount').value);

    //Validações
    // Se o valor da conta for inválido, assume 0
    if (isNaN(bill)) bill = 0;
    // Se porcentagem for inválida, assume 0
    if (isNaN(percent)) percent = 0;
    // Se número de pessoas for inválido ou menor que 1, assume 1
    if (isNaN(people) || people < 1) people = 1;

    //Cálculos
    let tipValue = bill * (percent / 100);
    let totalValue = bill + tipValue;
    let perPerson = totalValue / people;

    //Atualizar a tela
    document.getElementById('tipAmount').innerText = formatter.format(tipValue);
    document.getElementById('totalAmount').innerText = formatter.format(totalValue);
    document.getElementById('amountPerPerson').innerText = formatter.format(perPerson);
}

function resetCalculator() {
    // Limpa os inputs
    document.getElementById('billAmount').value = '';
    document.getElementById('tipPercentage').value = '10';
    document.getElementById('splitCount').value = '1';

    // Reseta os textos de resultado
    document.getElementById('tipAmount').innerText = 'R$ 0,00';
    document.getElementById('totalAmount').innerText = 'R$ 0,00';
    document.getElementById('amountPerPerson').innerText = 'R$ 0,00';
}