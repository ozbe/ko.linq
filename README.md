**ko.linq** adds convenience functions to ko.observableArray to easily access linq functions, along with a ToObservableArray() function to convert Enumerable back to a ko.observableArray.

## Dependencies

 * knockout.js [http://knockoutjs.com](http://knockoutjs.com)
 * linq.js [http://linqjs.codeplex.com](http://linqjs.codeplex.com)

## Setup
Simply add a script element referencing the ko.linq javascript file after the knockout and linq script elements of your html.

```html
<script type="text/javascript" src="scripts/knockout.js"></script>
<script type="text/javascript" src="scripts/linq.js"></script>
<script type="text/javascript" src="scripts/ko.linq.js"></script>
```

## Example

```javascript
var output = function (value) {
	console.log(value);
};

var array = ko.observableArray([
	{ id: 1, title: 'Catch 22' },
	{ id: 2, title: 'Moby Dick' }
	]);

output('Input: ' + array());

var array2 = array
	.Select(function(x) { return x.title; })
	.ToObservableArray();
  
output('Input: ' + array2());
  ```
