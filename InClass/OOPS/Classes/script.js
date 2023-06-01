


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


// Example 2: No matter of chaining the object, context would be the last Object 

// let obj3 = {
//     name: "obj3",
//     class: "9th",
//     sum: function(a,b) {
//         console.log(a + b);
//         console.log(this); // obj3 
//     }
// }

// let obj2 = {
//     name: "obj2",
//     obj3: obj3
// }

// let obj1 = {
//     name: "obj1",
//     obj2: obj2
// }

// obj1.obj2.obj3.sum(1,2)


//  ---------------  Pitfalls of Implicit Binding  --------------


// --------- CALL SITE and Function Reference -------

// let obj = {
//     name: "utakrsh ",
//     sum: function(a,b) {
//         console.log("hello sum ", a, b)
//     }
// }

// obj.sum(1,2) // hello sum  1 2  -> this is a call site 

// const sumCopy = obj.sum  // -> this is NOT call site.

// sumCopy(1, 3); // hello sum  1 3 ---> this is a call site



// function sum() {
//     console.log("hey there sum");
// }

// sum();


// const sumCopy = sum;

// sumCopy() 



//  -------- Real Pitfall ----------------

// let obj = {
//     name: "akaj",
//     num1: 1,
//     num2: 2,
//     sum: function() {
//         // context -> this -> window
//         console.log("hey tehre guys");
//         console.log(this)
//         const sum = this.num1 + this.num2;
//         console.log(sum, "sum") ;
//     }
// }

// // console.log(obj.num1);

// // obj.sum(); // CALL SITE ? 

// let sumCopy = obj.sum // Implicit binding will be lost 

// sumCopy()


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



// apply


// function foo(a,b) {
//     this.a = a;
//     this.b = b
//     // console.log(this, a, b)
// }


// var obj = {
//     a: 1,
//     foo: foo
// }

// var obj2 = {};

// // obj.foo.call(obj2, 1,2) // call site 

// obj.foo.apply(obj2, [2,4]) // call site 

// console.log(obj2)



//  bind ;;; 
// function foo(a,b) {
//     this.a = a;
//     this.b = b
//     // console.log(this, a, b)
// }

// const obj1 = {
//     foo: foo
// }

// const fooCopy = obj1.foo.bind(obj1, 12, 25) 

// console.log(obj1, "obj1")

// //sasdasdasdsadasdasd

// fooCopy() // callsite -> no Implicit, no explicit, no new || we have default binding (contexxt -> windows)

// console.log(obj1, "obj1")


/*
    Rule no. 4 -----> new keyword()
   
    new keyword create a blank Object;
*/

// function CarConstructor(sp, md) {
//     this.speed  = sp;
//     this.model = md; 
//     this.canIDrive = function() {
//         console.log("Yes i can drive hundai with speed", this.speed)
//     }
// }

// const hundai = new CarConstructor(100, "hundai v8");
// console.log(hundai)




/*
    Rules Precedence -> if two or more rules fight then who will win 

*/

// new > explicit > implicit > default 


// function foo(str) {
//     this.a = str;
// }

// var obj1 = {
//     foo: foo
// }

// var obj2 = {
//     name: "obj2"
// }


// obj1.foo("hey tehre")

// console.log(obj1) // {a: "" , foo: function}



//  ------ > Inplicit Vs Explicit

// obj1.foo.call(obj2, "inplicit vs explicit") // foo will have context of obj2
// obj1.foo.call(null, "inplicit vs explicit") // foo will have context of Window obj

// 'use strict'
// obj1.foo.call(null, "inplicit vs explicit") // foo will have context of null

// console.log(obj1)
// console.log(obj2)



//  --------> new Keyword vs IMPLICIT ------ 

// function foo(str) {
//     console.log("sadasddsa")
//     this.a = str;
// }

// var obj1 = {
//     foo: foo
// }

// let car = new obj1.foo(1);
// console.log(car)



// JS 


// console.log(car)
// console.log(obj1)



//  ----> new Vs Explicit  ---------

// let car = new obj1.foo.call(obj2, "implicit"); // calll site 


// console.log(obj1, obj2)