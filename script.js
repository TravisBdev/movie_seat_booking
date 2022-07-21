const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.querySelector('#count');
const total = document.querySelector('#total');
const movieSelect = document.querySelector('#movie');
let ticketPrice = +movieSelect.value;



// saves the selected movie including the price
const setMovieData = (movieIndex, moviePrice) => {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

// updates the seats selected and the total
const updateCount = () => {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const selectedCount = selectedSeats.length;

  // saves the index of the selected seats
  const seatsIndex = [...selectedSeats].map((seat) => {
    return [...seats].indexOf(seat);
  })

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  count.innerText = selectedCount;
  total.innerText = selectedCount * ticketPrice;
}

// populate UI with data from localstorage
const populateUI = () => {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

  if(selectedSeats !== null && selectedSeats.length > 0){
    seats.forEach((seat, index) => {
      if(selectedSeats.indexOf(index) > -1){
        seat.classList.add('selected');
      }
    })
  }

  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

  if(selectedMovieIndex !== null){
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}


// handles a change in movie selection
movieSelect.addEventListener('change', (e) => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateCount();
})


// click handler for selecting seats
container.addEventListener('click', (e) => {
  if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
    e.target.classList.toggle('selected');

    updateCount();
  }
})

// initial count and total set
updateCount();


