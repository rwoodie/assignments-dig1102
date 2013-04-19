var assert = require("assert"),
    hundredDoors = require("./Homework-12.1.Code");
    
// test: do we have a Hallway?
assert(hundredDoors.hallway);

// test: do we have Doors in our Hallway?
assert(hundredDoors.hallway.doors);

// test: do we have 10 Doors
assert(hundredDoors.hallway.doors.length, 10);


// test: are all the Doors "closed"?
for ( var index = 0; index < hundredDoors.hallway.doors.length; index++ ){
    var door = hundredDoors.hallway.doors[index];
    
    assert.equal(door, 0);
}

// do: PASS 1 -- take a walk down the hallway, change the state of the doors
assert(hundredDoors.hallway.toggle);

// test: are all the Doors "open"?

// do: PASS 2 -- take a walk down the hallway, change the state of the doors

// test: is every EVEN Door "closed"? is every ODD Door "open"?

// do: PASS 3 -- take a walk down the hallway, change the state of the doors

// test: does the Hallway match our expected state?