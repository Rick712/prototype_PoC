const counter = document.querySelector('.countdown')

if (counter) {
    window.setInterval(function() {
        let nmbr = counter.innerHTML
        nmbr--
        console.log(nmbr)
        counter.innerHTML = nmbr
        if(nmbr == 0) {
            if(window.location.href.indexOf('/genre-explaination')) {
                setTimeout(() => {
                    window.location = '/start'
                }, 500)
            } else if (window.location.href.indexOf('/keyword-explaination')) {
                setTimeout(() => {
                    window.location = '/keywords'
                }, 500)
            }
        }
    }, 1000)
}