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

body.addEventListener('click', function(e){
    var target = e.target.parentElement;
    console.log(isTarget(target));
});