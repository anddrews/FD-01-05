$(document).ready(function(){
    $('.carusel').slick({
        autoplaySpeed: 1000,
        autoplay: true,
        arrows: true,
        centerMode: true,
        slidesToShow: 3,
        dots: true,
    });
  });

  var foo = 3;

  var cabinet = {
    bar: 10,
    foo: 'Hello world',
    tmp: true,
    diff: {
        inner: "I'm inner"
    }
  };

  var human = {
      age: 25,
      name: 'Joe',
      address: {
          country: "Belarus",
          city: 'Minsk',
          street: {
              name: 'Nezaleznasty',
              building: 34
          } 
      }
  }

  console.log('simple variable foo', foo);
  console.log('cabinet variable foo', cabinet.foo);
  console.log('cabinet variable inner', cabinet.diff.inner);

  var number = 100.2;
  var string = "'23@#This''''''''' ia a number string 13516435135465'";
  var bolean = true || false;
  var Null = null;
  var Undefined = undefined;
  var obj = {};
  var simbol = Symbol();
  var bigInt = BigInt(123123);


  // Not a data type

  var arr = [1, 2, 3, 4, 5];

  console.log(arr[3]);

  1 + 3;
  5 - 2;
  5 * 2;
  5 / 2;
  7 % 3;

//   3 > 2
//   true
//    3 < 2
//   false
//   2 >= 2
//   true
//   2 == 2
//   true
//   2 === 2
//   true
//   2 == '2'
//   true
//   2 === '2'
//   false
//   2 != '2'
//   false
//   2 !== '2'
//   true




