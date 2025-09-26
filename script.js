// URL única do seu contador
const contadorURL = "https://api.countapi.xyz/hit/seu-site-qr-code/visitas";

// Função para atualizar o contador
fetch(contadorURL)
  .then(response => response.json())
  .then(data => {
    document.getElementById('contador').innerText = data.value;
  });
