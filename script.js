// Função para inserir valores no visor
function insertToDisplay(data) {
    // Adiciona o valor (data) no final do que já está no visor
    document.querySelector('#display').value += data;
}

// Função para limpar o visor
function clean() {
    // Limpa o visor, deixando-o vazio
    document.querySelector('#display').value = '';
}

// Função para apagar o último caractere do visor
function back() {
    const display = document.querySelector('#display');
    // Remove o último caractere do visor (usando slice)
    display.value = display.value.slice(0, -1);
}

// Função para calcular o resultado
function result() {
    const display = document.querySelector('#display');
    try {
        // Tenta calcular o que está no visor usando eval (interpreta a string como uma expressão)
        display.value = eval(display.value);
    } catch {
        // Se houver um erro (por exemplo, expressão inválida), exibe 'Error'
        display.value = 'Error';
    }
}
