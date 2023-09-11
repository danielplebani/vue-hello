/*
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa inserendo il percorso in una propietá dell'oggetto restituito dalla funzione data.
*/

const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'HELLO WORLD',
      image: './asset/img/Panda-770x470.jpg'
    }
  }
}).mount('#app')