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
 * +    | +1  | +1  | +2
 * +    | +1  | -1  | +0
 * +    | +1  | +0  | +1
 * +    | +0  | +1  | +1
 * +    | +0  | -1  | -1
 * +    | +0  | +0  | +0
 * +    | -1  | +1  | +0
 * +    | -1  | -1  | -2
 * +    | -1  | +0  | -1
 */

//Testing addition
var addition = function(a, b){

    return a + b;
}

    assert.equal(addition(+1, +1), +2);
    assert.equal(addition(+1, -1), +0);
    assert.equal(addition(+1, +0), +1);
    assert.equal(addition(+0, +1), +1);
    assert.equal(addition(+0, -1), -1);
    assert.equal(addition(+0, +0), +0);
    assert.equal(addition(-1, +1), +0);
    assert.equal(addition(-1, -1), -2);
    assert.equal(addition(-1, +0), -1);
    
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

//A test for division
var divide = function(a, b){
    return a / b;
}

    assert.equal(divide(+1, +1), +1);
    assert.equal(divide(+1, -1), -1);
    
