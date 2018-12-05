/**
 * Created by Fnjo on 05/12/2018.
 */

window.onload = function() {
    var counter = 0;
    var video = document.getElementById('video');
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    var tracker = new tracking.ObjectTracker('face');
    tracker.setInitialScale(1);
    tracker.setStepSize(1.5);
    tracker.setEdgesDensity(0.1);

    tracking.track('#video', tracker, { camera: true });

    tracker.on('track', function(event) {

        context.clearRect(0, 0, canvas.width, canvas.height);

        event.data.forEach(function(rect) {
            context.strokeStyle = '#a64ceb';
            context.strokeRect(rect.x, rect.y, rect.width, rect.height);
            context.font = '11px Helvetica';
            context.fillStyle = "#fff";
            context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
            context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
        });
        if (event.data.length === 0) {
            front.classList.remove('start-transition');
            pages.classList.remove('book-transition');
            bookP.classList.remove('word-transition');
            bookh1.classList.remove('word-transition');
            counter = 0;
        }else{
            counter = counter + 1;
            console.log(counter);
            if(counter > 30){
                front.classList.add('start-transition');
                pages.classList.add('book-transition');
                bookP.classList.add('word-transition');
                bookh1.classList.add('word-transition');
            }
        }

    });

};