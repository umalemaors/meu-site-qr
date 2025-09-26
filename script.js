// URL correta com key
const contadorURL = "https://script.google.com/macros/s/AKfycbwzq550kPLXxNx4z16RD3XnDIX61DlM09ZHxTgY8Rmj1-TOB3Jz_800yIlTcDogDjHCYQ/exec";
fetch(contadorURL)
  .then(response => response.json())
  .then(data => {
    document.getElementById('contador').innerText = data.value;
  })
  .catch(error => console.error('Erro ao atualizar contador:', error));
