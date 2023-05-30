


// Class -> 1. Methods 
// 2. Properties
// 3. Constructor


//  ------------ This is somewhat like (Java or go, c++) -------------

// class Car {
//     model = "basic engin";
//     speed;

//     constructor(speed, model) {
//         this.model = model;
//         this.speed = speed;
//     }

//     canIDrive() {
//         console.log("Yes i can drive audi with speed", this.speed)
//     }
// }

// // // audi

// const audi = new Car("123", "v8");
// console.log(audi)

// console.log(audi.model);
// console.log(audi.canIDrive());


// ----------- CONSTRUCTOR FUNCTION (before es6, when classes were not there) --------

/*

*/

// function CarConstructor(sp, md) {
//     this.speed  = sp;
//     this.model = md; 
//     this.canIDrive = function() {
//         console.log("Yes i can drive hundai with speed", this.speed)
//     }
// }

// const hundai = new CarConstructor(2000, "prime model number")
// console.log(hundai)

// console.log(hundai.model, hundai.speed)
// hundai.canIDrive()


// --- Circle Object -> radius, location -> {x, y}

// function Circle(radius, position) {
//     this.radius = radius; // this keyword is nothing be CONTEXT
//     this.location =  position;
//     this.draw = function() {
//         console.log("localtion x", this.location.x, 
//         " location y ", this.location.y)
//     }
// }


// const goodCircle = new Circle(10, {x: 10, y: 15});
// console.log(goodCircle)

// goodCircle.draw()


// ----------- THe Fear of THIS --------------------

// To understand this we need to understand the concept of callSite .... 

// function foo() {
//     console.log("foo")
// }

// // defined -> global 
// // called- global
// function bar() {
//     console.log("bar");
//     foo(); //  -> call site for foo 

//     foo; // -> is this call site ? no this is not
// }

// bar(); // global



//  4 rules to determine the context 

/*
    Rule 1: -> default binding.... 
*/

// function foo() {
//     // context -> this -> global (window)
//     console.log(this.abc); // window object. 
//     console.log("this obj")
//     console.log(this)
// }

// // console.log(window)

// foo(); // -> this is the call Site (Global) 



/*
    Rule no. 2 -----> implicit binding()
    // js WIll determine the context 

*/

// function foo() {
//     console.log(this);
// }


// var obj = {
//     name: "utakrsh",
//     rollNumber: 12,
//     func: function() {
//         console.log(this.name, this.rollNumber)

//         console.log(this)
//     }
// }

// obj.func()


/*
    Rule no. 3 -----> Explicit binding()
    // User or Dev will tell the JS what is the context.
    // js Will not determine the context itself.

    call, apply bind, 

    all these methods are used to do 1 thing 
    1. to set the context of the calling function
*/




// function foo() {
//     console.log(this)
// }


// var obj = {
//     a: 1,
//     food: foo
// }

// // Way 1 -> to call a function 
// function abc(a, b) {
//     // context -> this
//     console.log(this) // null ? 
//     console.log("asdsadas", a, b);
//     console.log("answer of this", this.a)
// }

// // abc(1,2); // call site of abc global 

// // ---  Call -> used 
// abc.call(obj, 10,20 )
// // abc.call(null, 10,20 )



/*
    Rule no. 4 -----> new keyword()
   
    new keyword create a blank Object;
*/

function CarConstructor(sp, md) {
    this.speed  = sp;
    this.model = md; 
    this.canIDrive = function() {
        console.log("Yes i can drive hundai with speed", this.speed)
    }
}

const hundai = new CarConstructor(100, "hundai v8");
console.log(hundai)






