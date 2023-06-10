// Revision of OOps 


// ---------- CLass Vs Constructor Function ----------------

// class Car {
//     wheels;
//     fuelTank;
//     modelNumber;

//     constructor(wheels) {
//         this.wheels = wheels;
//         this.fuelTank = "petrol";
//         this.modelNumber = "Bsic 1"
//     }

//     canIDrive() {
//         console.log("I can drive");
//     }
// }

// let hundai  = new Car(2);
// let tata  = new Car(2);

// console.log(hundai, "New Hundai")
// console.log(tata, "New Tata")
// hundai.canIDrive()


// // ------ 

// function CarConstructorClass(wheels) {
//     this.wheels = wheels;
//     this.fuelTank = "petrol";
//     this.modelNumber = "Bsic 1"

// }

// CarConstructorClass.prototype.canIDrive = function() {
//     console.log("I can drive");

// }

// let oldhundai = new CarConstructorClass(2);
// let oldTata = new CarConstructorClass(4);

// console.log(oldhundai, "old Hundai");
// console.log(oldTata, "old Tata");
// // console.log(, "old Hundai");
// oldhundai.canIDrive();




// --------- CLass Inheritancs Vs Constructor Function Inheritance ----------- 


class Shape {
    color; 
    constructor(color) {
        this.color = color
    }
    move() {
        console.log("move shape");
    } 
}

class Circle extends Shape {
    radius 

    constructor(radius, color) {
        super(color)
        this.radius = radius;
    }
    draw() {
        console.log("draw circle");
    }
}

const circle1 = new Circle(10, "red");
console.log(circle1, "circle 1")
circle1.move()
circle1.draw()



///- constructor func

function extendasdasdas(child, parent) {
    child.prototype = Object.create(parent.prototype)
    child.prototype.constructor = child
}


function ShapeConstructorClass(color) {
    this.color = color
}

ShapeConstructorClass.prototype.move = function() {
    console.log("mode shape");
}


function CircleConstructorClass(radius, color) {
    // super  call
    ShapeConstructorClass.call(this,color);
    this.radius = radius
}

extendasdasdas(CircleConstructorClass, ShapeConstructorClass)


// resetting the circle protytpe and Setting the SHape Prototype in chain
// CircleConstructorClass.prototype = Object.create(ShapeConstructorClass.prototype) --> this line is inside the extend function

// But we lost the constructor and Method 

//  adding the constructor 

// CircleConstructorClass.prototype.constructor = CircleConstructorClass


// adding the method 
CircleConstructorClass.prototype.draw = function() {
    console.log("draw circle");
}

const circlOld = new CircleConstructorClass(9, "orange");
console.log(circlOld, "circle old");

// circlOld.draw();
circlOld.move()



/// -------- -0----- - ------ 

// Tes cases 

// class Person extends Homosapiens {
//     name: 
// }

// function Person() {

// }

// Object.assign(Person.prototype, canwalk)

// Person 
// prototype = {
//     constructor: function,
//     abc: function(),
//     walkL: function() {

//     }
// }

// personalbar.protype = 
// {
//     walkL: function() {

//     },

//     eat: finction()
// }

// class Homosapiens {
//     cankill();
//     caneat(); 
//     canwalk()
//     canDance();
// }

// cosnt canwalk = {
   
// }


