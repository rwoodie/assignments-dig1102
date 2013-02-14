```javascript
jQuery.fn = jQuery.prototype = 
    
    {
    init: function( selector, context ) {
		var match, elem, ret, doc;

		// Handle $(""), $(null), or $(undefined)
		if ( !selector ) 
        {// This is a guard clause. If not selector, return this.
			return this;
		}

		// Handle $(DOMElement)
		if ( selector.nodeType ) 
        {// This is a guard clause. If line 15 is true, do line 17 and 18 and return this
			this.context = this[0] = selector;
			this.length = 1;
			return this;
		}
		
		// The body element only exists once, optimize finding it
		if ( selector === "body" && !context )
        {// This is a guard clause. If slector is exactly the same as body and not context, do lines 25-28 and return this
         // Order of operations says to read the === first and then the && operator
			this.context = document;
			this[0] = document.body;
			this.selector = "body";
			this.length = 1;
			return this;
		}

		// Handle HTML strings
		if ( typeof selector === "string" ) 
        // If this is true, we execute lines 39-138
        // If false execute line 151
        {
			// Are we dealing with HTML string or an ID?
			match = quickExpr.exec( selector );

			// Verify a match, and that no context was specified for #id
			if ( match && (match[1] || !context) ) 
            // If a match is found and no context was found, execute lines 48-110
            // There is an else if on line 114 for this if statement that will be executed if line 42 is false
            // See line 114 for notes
            {

				// HANDLE: $(html) -> $(array)
				if ( match[1] ) 
                
                {
					doc = (context ? context.ownerDocument || context : document);

					// If a single string is passed in and it's a single tag
					// just do a createElement and skip the rest
					ret = rsingleTag.exec( selector );

					if ( ret ) 
                    
                    {
						if ( jQuery.isPlainObject( context ) ) 
                        
                        {
							selector = [ document.createElement( ret[1] ) ];
							jQuery.fn.attr.call( selector, context, true );

						} 
                        
                        else 
                        {
							selector = [ doc.createElement( ret[1] ) ];
						}

					}
                    
                        else 
                        {
						    ret = buildFragment( [ match[1] ], [ doc ] );
						    selector = (ret.cacheable ? ret.fragment.cloneNode(true) : ret.fragment).childNodes;
					    }
					
					return jQuery.merge( this, selector );
					
				// HANDLE: $("#id")
				} 
                    else 
                
                {
					elem = document.getElementById( match[2] );

					if ( elem ) 
                    {
						// Handle the case where IE and Opera return items
						// by name instead of ID
						if ( elem.id !== match[2] ) 
                        
                        {
							return rootjQuery.find( selector );
						}

						// Otherwise, we inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $("TAG")
			} // This else if statement is connected to line 42
              // If line 114 is true do lines 117-120 and return the output. If false check the next else if on line 125  
            else if ( !context && /^\w+$/.test( selector ) ) 
            
            {
				this.selector = selector;
				this.context = document;
				selector = document.getElementsByTagName( selector );
				return jQuery.merge( this, selector );

			// HANDLE: $(expr, $(...))
            } 
            
            else if ( !context || context.jquery ) 
            // This else if statement is connected to line 114. Execute line 128 if true. If false go to the else statement on line 134
            {
				return (context || rootjQuery).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
		    }   
            
            else 
            { // This else statement is connected to line 125. If line 125 is false, execute line 136.
				return jQuery( context ).find( selector );
			}

		// HANDLE: $(function)
		// Shortcut for document ready
		} 
            else if ( jQuery.isFunction( selector ) ) 
            {
			    return rootjQuery.ready( selector );
		    }

		if (selector.selector !== undefined) 
            {
			    this.selector = selector.selector;
			    this.context = selector.context;
		    }

		return jQuery.makeArray( selector, this );
	},

```