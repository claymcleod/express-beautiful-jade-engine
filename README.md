Express Beautiful Jade Engine
=============================

For those of us who like clean HTML output from express.

Installation
-------------

```
npm install express-beautiful-jade-engine --save
```

Usage
-------------

``` 
// Overwrite the default Jade engine with this one
app.engine('jade', require('express-beautiful-jade-engine'));

// Set the default view engine to the EBJE
app.set('view engine', 'jade');
```