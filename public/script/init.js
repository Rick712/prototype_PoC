const socket = io.connect()

socket.on('start', () => {
    window.location = '/start'
})