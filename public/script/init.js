const socket = io.connect()

socket.on('start', () => {
    window.location = '/genre-explaination'
})