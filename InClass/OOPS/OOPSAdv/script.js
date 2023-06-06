// class Car {
//     model = "basic engin";
//     speed;

//     constructor(speed, model) {
//         this.model = model;
//         this.speed = speed;
//     }

//     canIDrive() {
//         console.log("Yes i can drive with speed", this.speed)
//     }
// }

// // // audi

// const audi = new Car("123", "v8");
// const bugati = new Car("423", "Bug 124");
// console.log(audi, "audi")
// console.log(bugati, "bugati")

// audi.canIDrive()
// bugati.canIDrive()






// function CarConstructor(sp, md) {
//     this.speed  = sp;
//     this.model = md; 
//     this.canIDrive = function() {
//         console.log("Yes i can drive hundai with speed", this.speed)
//     }
// }

// const hundai = new CarConstructor(2000, "prime model number")

// const hundai1 = new CarConstructor(20001, "humdai 1 ")


// console.log(hundai, "hundai")
// console.log(hundai1, "hundai 1")


// Comparing both Constructor function and class Objects,
// we can see the METHODS are not created in class adn hence it saves 
// a lot of space and time.


/*
    INHERITANCE

*/

// class Car {
//     wheels;
//     fuelTank;
//     modelNumber;

//     constructor() {
//         this.wheels = 4;
//         this.fuelTank = "petrol";
//         this.modelNumber = "Bsic 1"
//     }

//     canIDrive() {
//         console.log("I can drive");
//     }
// }


// class BMWCar extends Car{
//     sportsMode;
//     AirBags;
//     Nitros;

//     constructor(sportsMode, AirBags, Nitros) {
//         super() // super refers to the parent parent()
//         this.sportsMode = sportsMode;
//         this.AirBags = AirBags;
//         this.Nitros = Nitros;
//     }

//     canIDriveBMW() {
//         console.log("No I cant");
//     }
// }


// const bmwClassC = new BMWCar("Leve 3", 2, 100);
// console.log(bmwClassC, "bmwClass C")

// bmwClassC.canIDriveBMW();
// bmwClassC.canIDrive()


/*

// Get the REAL PRIVATE PROPERTIES... 

    Getters and Setters ... ? 

    READ: MAP VS WEAKMAP..... 

*/

// const _radius = new WeakMap() 


// class Circle {

//     colourful;

//     // this is how old es5 used to describe the Private property 
//     // this is not Effective. 
//     #Depth;

//     constructor(radius) {
//         _radius.set(this, radius)

//         this.colourful = true
//     }

//     get radius() {
//         return _radius.get(this)
//     }

//     set radius(value) {
//         _radius.set(this, value)
//     }


//     get color() {
//         return this.colourful
//     }

//     set color(color) {
//         this.colourful = color
//     }

// }

// const circle = new Circle(10);
// console.log(circle);

// // circle.#Depth = 100; TODO:  how to edit # properties 
// console.log(circle);


// console.log(circle.radius, "radius");


// circle.radius = 1000000;

// console.log(circle.radius, "radius");


// console.log(circle.colourful)



/*
    Instance Vs Static Methods --- 

*/

// class Circle {

//     radius;

//     constructor(radius) {
//         this.radius = radius;
//     }

//     // THis belongs to the instance
//     draw() {
//         console.log("Draw")
//     }

//     // This belongs to the class 
//     static parse() {
//         console.log("hellow world ")
//     }
// }

// // This Cir is the Instance of the class Circle..

// const cir = new Circle(1);
// console.log(cir)

// cir.draw()


// // console.log(circle)

// // cir.parse()

// Circle.parse()



/*
    Method Overriding ...

*/

// class Student {

//     name;

//     constructor(name) {
//         this.name = name;
//     }

//     markAttendance() {
//         console.log("Common students Simple marking the attendance for ", this.name)
//     }
// }

// class TeamCaptain extends Student {

//     badge

//     constructor(name ,badge) {
//         super(name) // This is to call the constructor of parent 
//         this.badge = badge;
//     }

//     markAttendance1() {
//         console.log("Captains marking Attendance", this.name)
//     }

//     playFootball() {
//         console.log("plays football ")
//     }

// }

// const varunSportCaptain = new TeamCaptain("Varun", 12);
// console.log(varunSportCaptain)
// varunSportCaptain.playFootball()
// varunSportCaptain.markAttendance()

// const akash = new Student("akash");
// console.log(akash)
// akash.markAttendance();




/*

    Behind the scenes in INHERITANCE....

*/

class Shape {

    color;

    constructor(color) {
        this.color = color;
    }

    move() {
        console.log("Move");
    }
}


// Object.create -> it will create a new object and the properties of that object will be inside the 
// Prototype.


class Circle extends Shape {
    constructor(radius, color) {
        super(color); // SHAPE CONSTRUCTURE 
        this.radius = radius;
    }

    draw () {
        console.log("Draw");

    }
}

// const circleObj = new Circle(10, "red")
// console.log(circleObj);
// circleObj.move()






// function ShapeConstructor(color) {
//     this.color = color;
// }

// ShapeConstructor.prototype.move = function() {
//     console.log("Move");
// }


// function CircleConstructor(radius, color) {
//     ShapeConstructor.call(this, color) // Mocks the calling of the super keyword
//     this.radius = radius;
// }


// //1.  By doing this I am setting the Inhertance 
// // this is to set the PARENTS PROTOTYPE... 
// CircleConstructor.prototype = Object.create(ShapeConstructor.prototype)


// //2 . Now we add the Methods of the Circle.
// CircleConstructor.prototype.draw = function() {
//     console.log("Draw");
// }



// const circleConstObj = new CircleConstructor(1000, "pink")
// console.log(circleConstObj)




/*
    COMPOSITION? -> MIXINS... 
*/

// JS -> instead of inheritance do Composition ... 


// class Person {
//     name
// }

// class Eat {
    // eat
// }

// class Walk {
//  walk
// }

// class Swim {
//  swim
// }

// class Person extends Eat, Walk, Swim {

// }

// const perosn = new Person()

// 1. multiple Inheritance is not supported. 
// 2. All the properties all the methods would go inside the Person class 
// which makes the object of Person class heavy.


const canSwim = {
    swim: function() {
        console.log("swim")
    }
}

const canEat = {
    eat: function() {
        console.log("eat")
    },
    funnywalk: false,
}

const canWalk = {
    walk: function() {
        console.log("walking nicely")
    }
}


// constructor Function.
function Person() {
    this.name = "utkarsh"
}

const utkarsh = new Person()
console.log(utkarsh, "utkarsh person")


// taget Person Prototype ..
// This is a glimpse of you doing the multiple inheritance . 

Object.assign(Person.prototype,canWalk,  canEat, canSwim)

utkarsh.walk()
utkarsh.eat()

utkarsh.swim();










