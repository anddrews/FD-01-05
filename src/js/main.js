function tmp() {
    console.log('function was called ' + c);
    var d = 40;
}

var c;
console.log(c);

c = 20;

console.log(c);

tmp();

var func = function() {
    console.log('fun')
}

func();

var a = 10;
var b = 10;
var c = 10;

var obj1 = {
    a: 3
};

var obj2 = {
    a: 3
}

console.log(obj1 === obj2);

var obj3 = obj1;

console.log(obj3 === obj1);

obj3.a = 20;

console.log(obj1.a);

var str = 'Hello'

str += ' World';

var simple = 10;
var ref = {
    a: 'hello'
};

function test (a, b) {
    a += 10;
    console.log('inside func a' , a);

    b.a += ' world';
    console.log('inside func b' , b);
}

function greeting(str, name) {
    return {
        a: str.a + ' ' + name
    };
}



console.log('before func a' , simple);
console.log('before func b' , ref);

// test(simple, ref);

var greet = greeting(ref, 'Niokla');
console.log(greet);

console.log('after func a' , simple);
console.log('after func b' , ref);

function renderRow(length, stars, sign) {
    var result = '';

    for (i = 0; i < (length - stars) / 2; i++) {
        result += ' ';
    }

    for (i = 0; i < stars; i++) {
        result += sign;
    }

    return result;
}

function triangle (rows, sign) {
    for (var i = 1; i < rows * 2; i += 2) {
        console.log(renderRow(rows * 2 - 1, i, sign));
    }
}


triangle(9, '3');
