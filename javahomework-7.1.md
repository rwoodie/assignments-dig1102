three_js/editor/js/ui/Sidebar.Material.js: 426-444
```javascript
function updateRows() {

    	var properties = {
			'color': materialColorRow,
			'ambient': materialAmbientRow,
			'emissive': materialEmissiveRow,
			'specular': materialSpecularRow,
			'shininess': materialShininessRow,
			'map': materialMapRow,
			'lightMap': materialLightMapRow,
			'bumpMap': materialBumpMapRow,
			'normalMap': materialNormalMapRow,
			'specularMap': materialSpecularMapRow,
			'envMap': materialEnvMapRow,
			'opacity': materialOpacityRow,
			'transparent': materialTransparentRow,
			'wireframe': materialWireframeRow

		};

```
* The name of the function is updateRows
* There are no arguments
* Line 428 - 444 is the scope
* Variable properties is within the scope of lines 429-442

three_js/editor/js/ui/Sidebar.Material.js: 454-462
```javascript
    function getMaterialInstanceName( material ) 
    {

		for ( var key in materialClasses ) {

			if ( material instanceof materialClasses[ key ] ) return key;

		}

	}
```
* The name of the function is getMaterialInstanceName
* The name of the argument is material
* The scope of the function is lines 456-460
* The return is key


/editor/js/ui/Sidebar.Scene.js: 129-144
```javascript
function updateOutliner() 
    {

    	var id = parseInt( outliner.getValue() );

		scene.traverse( function ( node ) 
        {

			if ( node.id === id ) 
            {

				signals.objectSelected.dispatch( node );
				return;

			}

		} );

	}
```
* The name of the function is updateOutliner
* There are no arguments associated with this function
* There is a variable inside of the scope of Lines 129-144 labeled: var id
* There is a function inside the function in Lines 133-142. The function name is scene.traverse and the argument name is node
* The return is on Line 138
* I did not find anywhere else where the function is invoked

jquery/speed/benchmarker.js: 1-9
```javascript
// Runs a function many times without the function call overhead
function benchmark(fn, times, name)
{
    fn = fn.toString();
	var s = fn.indexOf('{')+1,
		e = fn.lastIndexOf('}');
	fn = fn.substring(s,e);
	
	return benchmarkString(fn, times, name);
}
```
* The name of the function is benchmark
* The arguments are fn, times, name
* The scope of the function is lines 2-9
* The return is on line 8     return benchmarkString(fn, times, name)

jquery/src/css.js: 56-108
```javascript
function showHide( elements, show ) 
{
    var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = jQuery._data( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {
			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] = jQuery._data( elem, "olddisplay", css_defaultDisplay(elem.nodeName) );
			}
		} else {

			if ( !values[ index ] ) {
				hidden = isHidden( elem );

				if ( display && display !== "none" || !hidden ) {
					jQuery._data( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
				}
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}
```
* The scope of the function is lines 56-108
* The name of the function is showHide
* The arguments are elements, show 
* The return is on line 107 with return elements

behave_js/behave.js: 69-82
```javascript
 get: function doGetCaretPosition() 
 {
                var caretPos = 0;

                if (typeof defaults.textarea.selectionStart === 'number') 
                {
                    caretPos = defaults.textarea.selectionStart;
                } else if (document.selection) 
                
                {
                    defaults.textarea.focus();
                    var selection = document.selection.createRange();

                    selection.moveStart('character', -defaults.textarea.value.length);
                    caretPos = selection.text.length;
                }
                return caretPos;
},

```
* The name of the function is doGetCaretPosition
* The function has no arguments
* Variable caretPos is used 3 times inside the scope with 3 different values. However, line 70 has 'var' in front of the variable.
* the scope for this function is lines 69-82
* The return function is on line 81