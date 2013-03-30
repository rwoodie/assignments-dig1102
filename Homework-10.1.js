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
 * /    | +1  | +1  | +1
 * /    | +1  | -1  | -1
 * /    | +1  | +0  | +0
 * /    | +0  | +1  | +0
 * /    | +0  | -1  | +0
 * /    | +0  | +0  | +0
 * /    | -1  | +1  | -1
 * /    | -1  | -1  | +1
 * /    | -1  | +0  | +0
 */
 
var division = function(a, b){

    return a / b;

}

    assert.equal(division(+1, +1), +1);
    assert.equal(division(+1, -1), -1);
    assert.equal(division(+1, +0), +0);
    
