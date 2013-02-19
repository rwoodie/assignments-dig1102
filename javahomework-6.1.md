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
* Line 8 does not have an initialization. i < 1 is the condition. i++ is the exit
* If the condition in line 8 is true, go to line 10
* If line 10 is true, do line 12 and loop back to line 8 
* If line 10 is false, do line 16
