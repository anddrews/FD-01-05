//here will by JavaScript code ...

var mainMenu = document.querySelector('.main-menu');

function scrollTo(element) {
    if (element) {
        element.scrollIntoView({behavior: 'smooth'});
    }
}

function handleClick (e) {
    console.log('nav has been clicked')
    var element = e.target;
    var target = document.querySelector(`.${element.dataset.target}`);
    
    if(target) {
        scrollTo(target);        
    }
}

mainMenu.addEventListener('click', handleClick);

var a = document.querySelector('a');
var ul = document.querySelector('ul');

a.addEventListener('click', function(e){
    e.preventDefault();
    window.location = 'http://google.com';
});
