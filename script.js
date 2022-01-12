const botao = document.getElementById('botao');

function calcular() {

  let preco = document.getElementById('preco').value;
  let pago = document.getElementById('pago').value;
  let total = preco - pago;

  if((!preco) || (!pago)) {
    alert('Digite o preço e o valor pago.')
  } else {
    const tela = document.getElementById('tela');
    tela.value = `Você precisa pagar ${total} reais`;
  }
  
}

botao.addEventListener('click', calcular);