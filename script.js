const   btn = document.querySelector('.btn-start'),
        front = document.querySelector('.front'),
        pages = document.querySelector('.book'),
        bookP = document.querySelector('.front p'),
        bookh1 = document.querySelector('.front h1'),
        btn2 = document.querySelector('.btn-2'),
        btn3 = document.querySelector('.btn-3'),
        page1 = document.querySelector('.page1')

btn.addEventListener('click', () => {
    front.classList.add('start-transition')
    pages.classList.add('book-transition')
    bookP.classList.add('word-transition')
    bookh1.classList.add('word-transition')
})

btn2.addEventListener('click', () => {
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

btn3.addEventListener('click', () => {

})