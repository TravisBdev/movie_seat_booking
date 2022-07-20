const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.querySelector('#count');
const total = document.querySelector('#total');
const movieSelect = document.querySelector('#movie');
const ticketPrice = +movieSelect.value;

container.addEventListener('click', (e) => {
  if(e.target.classList.contains('seat') && !e.target.classList.conatins('occupied')){
    e.target.classList.toggle('selected');
  }
})