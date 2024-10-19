function cadastroDeUsuario() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    if (nome === '' || email === '') {   
    return;
    }

    const tabela = document.getElementById('tabela').getElementsByTagName('tbody')[0];
    const novaLinha = tabela.insertRow(0);

    const celulaNome = novaLinha.insertCell(0);
    const celulaEmail = novaLinha.insertCell(1);

    celulaNome.textContent = nome;
    celulaEmail.textContent = email;

    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
}