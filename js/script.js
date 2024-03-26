// script.js
document.getElementById('generateBtn').addEventListener('click', generateQR);
document.getElementById('downloadBtn').addEventListener('click', downloadQR);

function generateQR() {
    const qrText = document.getElementById('qrText').value;
    const qrCodeDiv = document.getElementById('qrCode');
    qrCodeDiv.innerHTML = ''; // Limpiar el código QR anterior

    // Genera el código QR usando una biblioteca (por ejemplo, QRious o qrcode.js)
    // Reemplaza la siguiente línea con tu lógica real de generación de códigos QR
    const qrCodeImage = document.createElement('img');
    qrCodeImage.src = 'https://api.qrserver.com/v1/create-qr-code/?data=' + encodeURIComponent(qrText);
    qrCodeDiv.appendChild(qrCodeImage);
}

function downloadQR() {
    const qrCodeImage = document.querySelector('#qrCode img');
    if (qrCodeImage) {
        const link = document.createElement('a');
        link.href = qrCodeImage.src;
        link.download = 'qr_code.png';
        link.click();
    }
}

