// Seleciona o formulário pelo ID e adiciona um evento ao enviar (submit)
document.querySelector('#form-orcamento').addEventListener('submit', function(e) {

  e.preventDefault(); 
  // Impede o comportamento padrão do formulário (recarregar a página)

  const campos = this.querySelectorAll('input, select, textarea');
  // Seleciona todos os campos do formulário (inputs, select e textarea)

  let formValido = true;
  // Variável de controle para saber se o formulário está válido

  // Percorre todos os campos do formulário
  campos.forEach(campo => {

    // Verifica se o campo está vazio (remove espaços em branco)
    if (campo.value.trim() === "") {

      campo.classList.add('erro-campo');
      // Adiciona a classe de erro (borda vermelha definida no CSS)

      formValido = false;
      // Marca o formulário como inválido

    } else {

      campo.classList.remove('erro-campo');
      // Remove a classe de erro se o campo estiver preenchido

    }
  });

  // Se todos os campos estiverem preenchidos corretamente
  if (formValido) {

    // Verifica se já existe uma mensagem de sucesso anterior
    const msgAntiga = document.querySelector('.sucesso-msg');

    // Remove a mensagem antiga, se existir
    if (msgAntiga) msgAntiga.remove();

    // Cria um novo elemento <p> para a mensagem de sucesso
    const sucesso = document.createElement('p');

    sucesso.className = 'sucesso-msg';
    // Define a classe da mensagem de sucesso

    sucesso.innerText = "Formulário enviado com sucesso!";
    // Texto exibido para o usuário

    sucesso.style.cssText =
      "color: #27ae60; text-align: center; font-weight: bold; margin-bottom: 15px;";
    // Estilo inline da mensagem de sucesso

    this.prepend(sucesso);
    // Insere a mensagem no topo do formulário

    this.reset();
    // Limpa todos os campos do formulário após o envio

  }

});
