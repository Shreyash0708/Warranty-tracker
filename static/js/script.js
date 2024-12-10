document.getElementById('addProductForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    
    fetch('/add_product', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').innerText = data.message;
        this.reset(); // Reset the form
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

function handleFileUpload(event) {
    const file = event.target.files[0];
    // You can add QR code scanning logic here if needed
}