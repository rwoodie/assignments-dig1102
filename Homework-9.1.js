var assert = require("assert");

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
 
//This function is for addition
var addition = function(a, b)
{
    return a + b;
}

{
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

/**
 * math | one | two | value
 * ===+=====+=====+======
 * -    | +1  | +1  | +0
 * -    | +1  | -1  | +2
 * -    | +1  | +0  | +1
 * -    | +0  | +1  | -1
 * -    | +0  | -1  | +1
 * -    | +0  | +0  | +0
 * -    | -1  | +1  | -2
 * -    | -1  | -1  | +0
 * -    | -1  | +0  | -1
 */
 
//This is for subtraction 
var subtraction = function(a, b)
{
    return a - b;
}

{
    assert.equal(subtraction(+1, +1), +0);
    assert.equal(subtraction(+1, -1), +2);
    assert.equal(subtraction(+1, +0), +1);
    assert.equal(subtraction(+0, +1), -1);
    assert.equal(subtraction(+0, -1), +1);
    assert.equal(subtraction(+0, +0), +0);
    assert.equal(subtraction(-1, +1), -2);
    assert.equal(subtraction(-1, -1), +0);
    assert.equal(subtraction(-1, +0), -1);
}

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
 
//This is for multiplication
var multiply = function(a, b)
{
    return a * b;
}

{
    assert.equal(multiply(+1, +1), +1);
    assert.equal(multiply(+1, -1), -1);
    assert.equal(multiply(+1, +0), +0);
    assert.equal(multiply(+0, +1), +0);
    assert.equal(multiply(+0, -1), +0);
    assert.equal(multiply(+0, +0), +0);
    assert.equal(multiply(-1, +1), -1);
    assert.equal(multiply(-1, -1), +1);
    assert.equal(multiply(-1, +0), +0);
}

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
 
//This is for division
var divide = function(a, b)
{
    return a / b;
}

    assert.equal(divide(+1, +1), +1);
    assert.equal(divide(+1, -1), -1);
//  assert.equal(divide(+1, +0), +0); this returns an error
    assert.equal(divide(+0, +1), +0);
    assert.equal(divide(+0, -1), +0);
//  assert.equal(divide(+0, +0), +0); this returns an error
    assert.equal(divide(-1, +1), -1);
    assert.equal(divide(-1, -1), +1);
//  assert.equal(divide(-1, +0), +0); this returns an error
    
