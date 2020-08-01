var tmp = 2 + 2;

'+ - ++ --';

console.log('postfix increment ' + tmp++);
console.log('postfix increment ' + tmp);
console.log('prefix increment ' + ++tmp);

console.log('postfix decrement ' + tmp--);
console.log('postfix decrement ' + tmp);
console.log('prefix decrement ' + --tmp);

tmp += 10; // tmp = tmp + 10;
console.log(tmp);
tmp -= 10; // tmp = tmp - 10;
console.log(tmp);
tmp *= 10; // tmp = tmp * 10;
console.log(tmp);
tmp /= 10; // tmp = tmp / 10;
console.log(tmp);
console.log(-tmp);
var test = '123sdfsd'
console.log(+test);
console.log(parseFloat('1546341e2', 10));


'tmp++ => return tmp; tmp = tmp + 1;'

var c = '758985';

if (c < 1) {
    console.log('1');
} else if (c === 2){
    console.log('2');
} else if (c === 758985){
    console.log(c + 10);
} else {
    console.log('else 4');
}

switch (c) {
    case 1: {
        console.log('switch ' + 1);
        break;
    }
    case 2: 
    case 5: 
    case 7: {
        console.log('switch 2 or 5 or 7');
        break;
    }
    case 3: {
        console.log('switch ' + 3);
        break;
    }
    default: {
        console.log('default');
    }
}

var loop = 6;
console.log('while');

while (loop <= 5) {
    console.log(++loop);
};

console.log('do while');

do {
    console.log(loop++);
} while(loop <= 5);

console.log('for');

for(var i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    } else {
        console.log(i);
    }
}

var tmp;

function foo(time) {
    var boo = 0;
    boo++;

    console.log('Hello from function times ' + time + ' boo ' + boo );
}


for (var i = 0; i < 5; i++) {
    foo(i);
}


// var createCounter = function () {
//     var count = 0;

//     return function () {
//         console.log('count ' + count++);

//         return function () {
//             console.log('hello inside');
//         }
//     }
// }

var boo = function() {
    console.log('boo');
}

boo();

const createCounter = count => () => console.log('called ' + count++);

var counter = createCounter(0);

counter();
counter();
counter();
counter();

