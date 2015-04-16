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
app.engine('jade', require('express-beautiful-jade-engine'));
app.set('view engine', 'jade');
```