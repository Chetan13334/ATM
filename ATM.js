let balance = 1000.00;

function updateBalance() {
    document.getElementById('balance-amount').textContent = balance.toFixed(2);
}

function deposit() {
    document.getElementById('form-container').style.display = 'block';
    document.getElementById('amount').value = '';
    document.getElementById('amount').setAttribute('placeholder', 'Enter deposit amount');
}

function withdraw() {
    document.getElementById('form-container').style.display = 'block';
    document.getElementById('amount').value = '';
    document.getElementById('amount').setAttribute('placeholder', 'Enter withdrawal amount');
}

function submitTransaction() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }

    const action = document.getElementById('amount').getAttribute('placeholder').includes('deposit') ? 'deposit' : 'withdraw';
    
    if (action === 'deposit') {
        balance += amount;
        alert(`You deposited $${amount.toFixed(2)}.`);
    } else {
        if (balance >= amount) {
            balance -= amount;
            alert(`You withdrew $${amount.toFixed(2)}.`);
        } else {
            alert('Insufficient funds.');
        }
    }

    updateBalance();
    cancelTransaction();
}

function cancelTransaction() {
    document.getElementById('form-container').style.display = 'none';
}
