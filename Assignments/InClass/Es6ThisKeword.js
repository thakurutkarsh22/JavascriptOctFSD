class FooBar{
    constructor(a, b) {
       this.foo = a;
       this.bar = b; 
    }
}


function solve(obj, a, b){
   const {foo, bar} = obj;
    return foo + bar + func.call(obj ,a, b);
}