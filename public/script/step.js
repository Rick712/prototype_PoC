const counter = document.querySelector('.countdown')

console.log(window.location.pathname)

if (counter) {
    window.setInterval(function() {
        let nmbr = counter.innerHTML
        nmbr--
        console.log(nmbr)
        counter.innerHTML = nmbr
        if(nmbr == 0) {
            if(window.location.pathname == '/genre-explaination') {
                setTimeout(() => {
                    window.location = '/start'
                }, 500)
            } else if (window.location.pathname == '/keywords-explaination') {
                setTimeout(() => {
                    window.location = '/keywords'
                }, 500)
            } else if (window.location.pathname == '/result-explaination') {
                setTimeout(() => {
                    window.location = '/result'
                }, 500)
            }
        }
    }, 1000)
}