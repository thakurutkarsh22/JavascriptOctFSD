function Animal(name, lifeSpan) {
    this.name = name;
    this.lifeSpan = lifeSpan;
  }
  
  function Reptile() {
    //super () ?
    this.layEggs = function layEggs() {
      console.log("Reptile laid eggs.");
    };
  }
  
//   Reptile.prototype = Object.create(Animal.prototype);
  
  Reptile.prototype.constructor = Reptile
  const snake = new Reptile()
  console.log(snake)
  
  
//   1.
  // class Reptile extends Animals {
  //   //
  // }
  
  // const snakes = new Reptile()
  
  /** Do not make changes in the above code. Start writing your code here. */