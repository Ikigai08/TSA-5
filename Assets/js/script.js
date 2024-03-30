function calculateOrder() {
    const talknenengPrice = 10;
    const tworonPrice = 5;
    const killemeresPrice = 10;
    const behenenequePrice = 12;

    const talknenengQuantity = parseInt(document.getElementById('talkneneng').value) || 0;
    const tworonQuantity = parseInt(document.getElementById('tworon').value) || 0;
    const killemeresQuantity = parseInt(document.getElementById('killemeres').value) || 0;
    const behenenequeQuantity = parseInt(document.getElementById('beheneneque').value) || 0;

    const totalBill = (talknenengPrice * talknenengQuantity) +
                      (tworonPrice * tworonQuantity) +
                      (killemeresPrice * killemeresQuantity) +
                      (behenenequePrice * behenenequeQuantity);

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const cashGiven = parseFloat(document.getElementById('cashGiven').value) || 0;
    const change = cashGiven - totalBill;
    
    const receiptContent = `
        <h2>Receipt</h2>
        <p>Customer Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Talkneneng: ${talknenengQuantity} x ${talknenengPrice} = ${talknenengQuantity * talknenengPrice} Pesos</p>
        <p>Tworon: ${tworonQuantity} x ${tworonPrice} = ${tworonQuantity * tworonPrice} Pesos</p>
        <p>Killemeres: ${killemeresQuantity} x ${killemeresPrice} = ${killemeresQuantity * killemeresPrice} Pesos</p>
        <p>Beheneneque: ${behenenequeQuantity} x ${behenenequePrice} = ${behenenequeQuantity * behenenequePrice} Pesos</p>
        <p>Total Bill: ${totalBill} Pesos</p>
        <p>Cash Given: ${cashGiven} Pesos</p>
        <p>Change: ${change} Pesos</p>
    `;

    document.getElementById('receipt').innerHTML = receiptContent;
}

// Function to show modal
function showModal() {
    calculateOrder();
    document.getElementById('modal').style.display = 'block';
}

// Function to close modal
document.getElementsByClassName('close')[0].onclick = function() {
    document.getElementById('modal').style.display = 'none';
}
