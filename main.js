document.getElementById('formulario').addEventListener('submit', function(event) {
  Event.preventDefault(); // Evita o envio do formulário

  const valorA = parseFloat(document.getElementById('campoA').value);
  const valorB = parseFloat(document.getElementById('campoB').value);
  const mensagem = document.getElementById('mensagem');

  if (valorB > valorA) {
    mensagem.textContent = "✅ Sucesso: Campo B é maior que Campo A!";
    mensagem.className = "mensagem valido";
  } else {
    mensagem.textContent = "Erro: Campo B deve ser maior que Campo A.";
    mensagem.className = "mensagem invalido";
  }
});


