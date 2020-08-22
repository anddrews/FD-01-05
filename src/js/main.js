var body = document.querySelector('body');

function isTarget(element) {
    var parent = element.parentElement;
    if (parent) {
        if (parent.classList.contains('target')) {
            return true;
        }

        return isTarget(parent);
    } 
    
    return false;
}


// setTimeout(function() {
//     console.log('Second');
// }, 2000);

function createCounter () {
    var counter = 0;
    return function () {
        console.log('count ' + counter++);
    };

}

// var interval = setInterval(createCounter(), 500);

// setTimeout(function() {
//     clearInterval(interval)
// }, 2000);

// console.log('First');




function smoothScroll() {
    var target = document.querySelector('.anchor');
    var position = target.getBoundingClientRect().y;
    var currentPosition = 0;

    var interval = setInterval(function() {
        window.scrollTo(0, currentPosition += 10);

        if (currentPosition + 300 > position) {
            clearInterval(interval);
        }
    }, 7);
}


body.addEventListener('click', function(e){
    var target = e.target.parentElement;
    smoothScroll();

    console.log(isTarget(target));
});
