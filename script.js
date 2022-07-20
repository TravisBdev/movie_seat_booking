const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.querySelector('#count');
const total = document.querySelector('#total');
const movieSelect = document.querySelector('#movie');
let ticketPrice = +movieSelect.value;

// updates the seats selected and the total
const updateCount = () => {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const selectedCount = selectedSeats.length;

  count.innerText = selectedCount
  total.innerText = selectedCount * ticketPrice;
}

// handles a switch in movie selection
movieSelect.addEventListener('change', (e) => {
  ticketPrice = +e.target.value;

  updateCount();
})


// click handler for selecting seats
container.addEventListener('click', (e) => {
  if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
    e.target.classList.toggle('selected');

    updateCount();
  }
})


