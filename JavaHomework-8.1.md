`src/data.js:24-32`
```javascript
Data.prototype = {
    locker: function( owner ) {
		var ovalueOf,
		// Check if the owner object has already been outfitted with a valueOf
		// "locker". They "key" is the "Data" constructor itself, which is scoped
		// to the IIFE that wraps jQuery. This prevents outside tampering with the
		// "valueOf" locker.
		unlock = owner.valueOf( Data );

```
* method: locker
* argument: owner
* prototype: Data.prototype = { . . . } (24-178)

`src/data.js:100-109'
```javascript
get: function( owner, key ) {
    	// Either a valid cache is found, or will be created.
		// New caches will be created and the unlock returned,
		// allowing direct access to the newly created
		// empty data object.
		var cache = this.cache[ this.locker( owner ) ];

		return key === undefined ?
			cache : cache[ key ];
	},
```
* method: get
* arguments: owner, key