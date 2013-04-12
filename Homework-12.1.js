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
 * op | one | two | value
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
 
var addition = function(a, b)
{
    return a + b;
}
 
{//This is a test for addition 
    assert.equal(addition(+1, +1), +2);
    assert.equal(addition(+1, -1), +0);
    assert.equal(addition(+1, +0), +1);
    assert.equal(addition(+0, +1), +1);
    assert.equal(addition(+0, -1), -1);
    assert.equal(addition(+0, +0), +0);
    assert.equal(addition(-1, +1), +0);
    assert.equal(addition(-1, -1), -2);
    assert.equal(addition(-1, +0), -1);
}

var multiplication = function(a, b)
{
    return a * b;
}

{//This is a test for multiplication
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
    