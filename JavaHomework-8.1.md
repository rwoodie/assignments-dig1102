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

`src/data.js:100-109'`
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

`src/event.js:588-592`
```javascript
jQuery.Event = function( src, props ) {
    // Allow instantiation without the 'new' keyword
	if ( !(this instanceof jQuery.Event) ) {
		return new jQuery.Event( src, props );
	}
```
* Function: jQuery.Event
* Arguments: src, props
* return: new instance of jQuery.Event (constructor)

`src/effects.js:360-362`
```javascript
function Tween( elem, options, prop, end, easing ) {
    return new Tween.prototype.init( elem, options, prop, end, easing );
}
```
* Function: Tween
* Arguments: elem, options, prop, end, easing
* return new instance of Tween.prototype.init

`src/effects.js:360-362`
```javascript
Tween.prototype = {
    constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || "swing";
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
```
* Prototype: Tween.prototype = {...} Lines 365-407
* Arguments: elem, options, prop, end, easing, unit
* Constructor: I think this is the constructor - Tween.prototype.init


`src/speed/jquery-basis.js:19-22`
```javascript
var jQuery = function( selector, context ) {
    	// The jQuery object is actually just the init constructor 'enhanced'
		return new jQuery.fn.init( selector, context );
	},
```
* Function: jQuery
* Arguments: selector, context
* return: new instance of jQuery.fn.init (constructor)


`src/speed/jquery-basis.js:74-81`
```javascript
jQuery.fn = jQuery.prototype = {
    init: function( selector, context ) {
		var match, elem, ret, doc;

		// Handle $(""), $(null), or $(undefined)
		if ( !selector ) {
			return this;
		}
```
* Prototype:  jQuery.prototype = {...} Lines 74-300