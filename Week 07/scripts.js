// connect to the socket
let socket = io();
    socket.on('minutes', (msg) => {
        const timerDisplay = document.getElementById('timerDisplay'); 
        if (timerDisplay) {
            timerDisplay.textContent = `Minutes used: ${msg}`; 
        }
})
