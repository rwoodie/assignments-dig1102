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