// JavaScript code for seat selection and booking

document.addEventListener('DOMContentLoaded', () => {
    const seatLayout = document.querySelector('.seat-layout');
    const confirmBtn = document.getElementById('confirm-btn');
    const ticketPreview = document.getElementById('ticket-preview');
    
    // Creating seats dynamically
    for (let i = 1; i <= 20; i++) {
        const seat = document.createElement('div');
        seat.classList.add('seat');
        seat.dataset.seatNumber = i;
        // Making every 5th seat a premium seat
        if (i % 5 === 0) {
            seat.classList.add('premium');
        }
        seatLayout.appendChild(seat);
    }

    // Handle seat selection
    seatLayout.addEventListener('click', (e) => {
        if (e.target.classList.contains('seat')) {
            e.target.classList.toggle('selected');
        }
    });

    // Confirm booking
    confirmBtn.addEventListener('click', () => {
        const selectedSeats = document.querySelectorAll('.seat.selected');
        if (selectedSeats.length > 0) {
            let seatNumbers = [];
            selectedSeats.forEach(seat => seatNumbers.push(seat.dataset.seatNumber));

            ticketPreview.innerHTML = `
                <div class="ticket">
                    <h2>Booking Confirmation</h2>
                    <p>Seats: ${seatNumbers.join(', ')}</p>
                    <p>Movie: Inception</p>
                    <p>Date: 30th August 2024</p>
                </div>
            `;
            ticketPreview.style.display = 'block';
        } else {
            alert('Please select at least one seat.');
        }
    });
});
