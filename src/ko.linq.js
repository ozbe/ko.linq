(function (Enumerable, ko) {    
	"use strict";  
	
	var mediator = function (methodName) {
		return function () {
			var enumerable = Enumerable.From(this());             
			return enumerable[methodName].apply(enumerable, arguments);
		};
	};
	
    for (var propertyName in Enumerable.prototype) {
        
        if (!Enumerable.prototype[propertyName].apply ||
            ko.observableArray.fn[propertyName]) {
             continue;   
        }
        
        ko.observableArray.fn[propertyName] = mediator(propertyName);
    }
    
    // Add ToObservableArray
    Enumerable.prototype.ToObservableArray = function() {
        return ko.observableArray(this.ToArray());
    };
})(Enumerable, ko);
