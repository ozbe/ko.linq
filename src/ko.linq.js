(function (Enumerable, ko) {      
    for (propertyName in Enumerable.prototype) {
        
        if (!Enumerable.prototype[propertyName].apply ||
            ko.observableArray.fn[propertyName]) {
             continue;   
        }
        
        ko.observableArray.fn[propertyName] = (function (methodName) {
            return function () {
                var enumerable = Enumerable.From(this())                
                return enumerable[methodName].apply(enumerable, arguments);
            };
        })(propertyName);
    }
    
    // Add ToObservableArray
    Enumerable.prototype.ToObservableArray = function() {
        return ko.observableArray(this.ToArray());
    }
})(Enumerable, ko);
