const socket = io.connect() 

const   btn1 = document.querySelector('#first'),
        btn2 = document.querySelector('#second')

btn1.addEventListener('click', () => {
    console.log('test')
    socket.emit('page1')
})

btn2.addEventListener('click', () => {
    socket.emit('page2')
})