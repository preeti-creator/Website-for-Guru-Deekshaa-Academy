const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

document.querySelector('.close-btn').addEventListener('click', function () {
    document.querySelector('.form-box.register').style.display = 'none'; // Hides the form
});



// Function to open the PDF in the iframe and show the download button
function openPDF(pdfName) {
    // Set the src of the iframe to the selected PDF file
    document.getElementById('pdf-viewer').src = pdfName;

    // Show the notes section and the download button
    document.getElementById('notes-section').style.display = 'block';
    document.getElementById('download-btn').style.display = 'inline-block';

    // Add download functionality to the button
    document.getElementById('download-btn').onclick = function() {
        // Create an anchor element to trigger the download
        const link = document.createElement('a');
        link.href = pdfName;
        link.download = pdfName;
        link.click();
    };
}