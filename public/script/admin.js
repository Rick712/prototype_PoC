const socket = io.connect() 

const   dislike = document.querySelectorAll('#dislike'),
        like = document.querySelectorAll('#like')

if(like) {
    like.forEach((likeBtn) => {
        likeBtn.addEventListener('click', function (e) {
            const genre = e.target.dataset.genre
            socket.emit('likeGenre', genre)
        })
    })
}