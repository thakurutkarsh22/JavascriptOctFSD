let generateOrder = function() {

    let count = 0
    function func(){ //bar
        count++;
        return "Total orders = " + count
    }

    return func;

}