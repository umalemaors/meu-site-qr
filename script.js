// URL única para o contador
const contadorURL = "https://api.countapi.xyz/hit/umalemaors.github.io/meu-site-qr/";

// Atualiza o contador quando a página é carregada
fetch(contadorURL)
  .then(response => response.json())
  .then(data => {
    document.getElementById('contador').innerText = data.value;
  })
  .catch(error => console.error('Erro ao atualizar contador:', error));
