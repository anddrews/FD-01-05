var element = document.getElementsByClassName('js');
var element1 = document.getElementById('js');

var element2 = document.querySelector('.js span');
var element3 = document.querySelectorAll('.js.first');

element2.innerHTML = `
    <span>
        <span>
            Hello
        </span>
        world
    </span>`;

element2.classList.add('bg-red');
element2.classList.remove('first');
element2.classList.toggle('first');

function toggle(param) {
    return !param;
}

console.log(toggle(true));
console.log(toggle(false));
console.log('toggle 2', toggle(2));

var body = element2.nextSibling;


var container = document.querySelector('.second');

var newNode = document.createElement('div');
newNode.className = 'test1 test2 test3';
newNode.innerText = 'Hellow World';

container.appendChild(newNode);

// newNode.onclick = function() {
//     console.log('span was clicked!')
// };

function handleClick1 () {
    console.log('handleClick1');
}

function handleClick2 () {
    console.log('handleClick2');
}

newNode.addEventListener('click', handleClick1);
newNode.addEventListener('click', handleClick2);

var btn = document.querySelector('.fireworks__button');
var frw = document.querySelector('.fireworks__img');

function startFireworks () {
    frw.classList.toggle('show');

    setTimeout(function() {
        frw.classList.toggle('show');
    }, 900);
}

btn.addEventListener('click', startFireworks);