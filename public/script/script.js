const socket = io.connect()

const   front = document.querySelector('.front'),
        pages = document.querySelector('.book'),
        bookP = document.querySelector('.front p'),
        bookh1 = document.querySelector('.front h1'),
        page1 = document.querySelector('.page1')

socket.on('turnPage1', function() {

    front.classList.add('start-transition')
    pages.classList.add('book-transition')
    bookP.classList.add('word-transition')
    bookh1.classList.add('word-transition')
    socket.emit('page1Turned')
})

socket.on('turnPage2', function() {
    page1.classList.add('page1-transition')
    const   txt = page1.querySelectorAll('.frontpage p'),
            backpage = page1.querySelector('.backpage'),
            frontpage = page1.querySelector('.frontpage')

    txt.forEach((p) => {
        p.classList.add('word1-transition')
    })

    backpage.classList.add('show')
    frontpage.classList.add('remove')
})

// btn2.addEventListener('click', () => {
//     page1.classList.add('page1-transition')
//     const   txt = page1.querySelectorAll('.frontpage p'),
//             backpage = page1.querySelector('.backpage'),
//             frontpage = page1.querySelector('.frontpage')

//     txt.forEach((p) => {
//         p.classList.add('word1-transition')
//     })

//     backpage.classList.add('show')
//     frontpage.classList.add('remove')
// })

// btn3.addEventListener('click', () => {

// })