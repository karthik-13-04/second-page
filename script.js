document.addEventListener('DOMContentLoaded', () => {
    // Show payment method details based on selected option
    document.querySelectorAll('input[name="payment-method"]').forEach(radio => {
        radio.addEventListener('change', function() {
            const paymentRight = document.querySelector('.payment-right');
            paymentRight.innerHTML = ''; // Clear previous content

            switch (this.value) {
                case 'quikpay':
                    paymentRight.innerHTML = `
                        <p>Your UPI ID: <input type="text" id="upi-id" name="upi-id" placeholder="Enter your UPI ID"></p>
                    `;
                    break;
                case 'card':
                    paymentRight.innerHTML = `
                        <label for="card-number">Card Number:</label>
                        <input type="text" id="card-number" name="card-number" required>
                        
                        <label for="card-name">Name on Card:</label>
                        <input type="text" id="card-name" name="card-name" required>
                        
                        <label for="expiry-date">Expiry Date:</label>
                        <input type="text" id="expiry-date" name="expiry-date" required>
                        
                        <label for="cvv">CVV:</label>
                        <input type="text" id="cvv" name="cvv" required>
                        
                        <label>
                            <input type="checkbox" id="save-card">
                            Save this card information in my BookMyShow account for faster payments
                        </label>
                    `;
                    break;
                case 'netbanking':
                    paymentRight.innerHTML = `
                        <p>Log in to your bank's website to complete your payment.</p>
                    `;
                    break;
                case 'wallets':
                    paymentRight.innerHTML = `
                        <p>Select your mobile wallet:</p>
                        <select id="wallets">
                            <option value="paytm">Paytm</option>
                            <option value="phonepe">PhonePe</option>
                            <option value="googlepay">Google Pay</option>
                        </select>
                    `;
                    break;
                case 'voucher':
                    paymentRight.innerHTML = `
                        <p>Enter voucher code:</p>
                        <input type="text" id="voucher-code" name="voucher-code">
                    `;
                    break;
                case 'redeem-points':
                    paymentRight.innerHTML = `
                        <p>Enter your reward points:</p>
                        <input type="text" id="reward-points" name="reward-points">
                    `;
                    break;
                default:
                    paymentRight.innerHTML = '';
            }
        });
    });

    // Show IP Address
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('ip-address').textContent = data.ip;
        });

    // Apply promo code functionality
    document.getElementById('apply-promo').addEventListener('click', () => {
        const promoCode = document.getElementById('promo-code').value;
        if (promoCode) {
            alert(`Promo code ${promoCode} applied!`);
            // Add logic to apply promo code and update total amount if necessary
        }
    });
});
