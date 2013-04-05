var assert = require("assert")

/**
 * four functions with two parameters:
 * - addition
 * - subtraction
 * - multiplication
 * - division
 * 
 * Must accept positive and negative Numbers (int or 
 * float) AND zero. Must not make an error!
 */


/**
 * math | one | two | value
 * ===+=====+=====+======
 * x    | +1  | +1  | +1
 * x    | +1  | -1  | -1
 * x    | +1  | +0  | +0
 * x    | +0  | +1  | +0
 * x    | +0  | -1  | +0
 * x    | +0  | +0  | +0
 * x    | -1  | +1  | -1
 * x    | -1  | -1  | +1
 * x    | -1  | +0  | +0
 */
 
/**
 * math | one | two | value
 * ===+=====+=====+======
 * x    | +1  | +1  | +1
 * x    | +1  | -1  | -1
 * x    | +1  | +0  | +0
 * x    | +0  | +1  | +0
 * x    | +0  | -1  | +0
 * x    | +0  | +0  | +0
 * x    | -1  | +1  | -1
 * x    | -1  | -1  | +1
 * x    | -1  | +0  | +0
 */ 
 
//Testing multiplication
var multiplication = function(a, b){
    return a * b;
}

//Testing division
var division = function(a, b){
    return a / b;
}

{ 
    assert.equal(multiplication(+1, +1), +1);
    assert.equal(multiplication(+1, -1), -1);
    assert.equal(multiplication(+1, +0), +0);
    assert.equal(multiplication(+0, +1), +0);
    assert.equal(multiplication(+0, -1), +0);
    assert.equal(multiplication(+0, +0), +0);
    assert.equal(multiplication(-1, +1), -1);
    assert.equal(multiplication(-1, -1), +1);
    assert.equal(multiplication(-1, +0), +0);
}

    assert.equal(division(+1, +1), +1);
    assert.equal(division(+1, -1), -1);
    assert.equal(division(+1, +0), +0);
    
    
    
    
    