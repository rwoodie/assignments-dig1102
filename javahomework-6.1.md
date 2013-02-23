```javascript

    hasClass: function( selector ) 
    {
		var className = " " + selector + " ",
			i = 0,
			l = this.length;
		for ( ; i < l; i++ ) 
        {
			if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) 
            {
				return true;
			}
		}

		return false;
	},


```
* line 8 is a for statement
* Line 8 does not have an initialization. i < 1 is the condition. i++ is the iterator
* If the condition in line 8 is true, go to line 10
* If line 10 is true, do line 12 and loop back to line 8 to do the iteration i++ and test the condition again i < 1
* If line 10 is false, do line 16

```javascript
propFix: 
    {
    	tabindex: "tabIndex",
		readonly: "readOnly",
		"for": "htmlFor",
		"class": "className",
		maxlength: "maxLength",
		cellspacing: "cellSpacing",
		cellpadding: "cellPadding",
		rowspan: "rowSpan",
		colspan: "colSpan",
		usemap: "useMap",
		frameborder: "frameBorder",
		contenteditable: "contentEditable"
	},

```
* This is an example of a dictionary and the keys are lines 30-41

```javascript
 function count() 
 {
   for(i = 3; i <= jQuery.benchmarker.libraries.length + 2; i++) 
   {
     var fails = jQuery("td:nth-child(" + i + ").fail").length;
     var wins = jQuery("td:nth-child(" + i + ").winner").length;
     jQuery("tfoot tr:first th:eq(" + (i - 1) + ")")
      .html("<span class='wins'>" + wins + "</span> / <span class='fails'>" + fails + "</span>");
   }
 }
// line 50 is a for statement
// i = 3 is the initialization. i <= jQuery.benchmarker.libraries.length + 2; is the condition. i++ is the iterator
// do i = 3; i <= jQuery.benchmarker.libraries.length + 2; and then do lines 52-55
// next loop back to line 50 do the iterator i++ and then test the condition i <= jQuery.benchmarker.libraries.length + 2 again


```

```javascript

UI.Select.prototype.setOptions = function ( options ) 

{

    while ( this.dom.children.length > 0 ) 
    {

		this.dom.removeChild( this.dom.firstChild );

	}

	for ( var key in options ) 
    {

		var option = document.createElement( 'option' );
		option.value = key;
		option.innerHTML = options[ key ];
		this.dom.appendChild( option );

	}

	return this;

};

```
* Line 72 is a conditional while loop. It would be the diamond shape in the diagram. If line 72 is true, do line 75