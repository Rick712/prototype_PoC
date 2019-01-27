const socket = io.connect()

socket.on('restartApp', () => {
    window.location = '/'
})