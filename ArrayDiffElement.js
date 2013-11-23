(function() {
	
	function defineArrayDiffElement() {
	
		function ArrayDiffElement(item, newIndex, oldIndex) {
			this.item = item;
			this.newIndex = newIndex;
			this.oldIndex = oldIndex;
		}
	
		ArrayDiffElement.prototype.added = function() {
			return oldIndex === undefined;
		};
	
		ArrayDiffElement.prototype.removed = function() {
			return newIndex === undefined;
		};
	
		ArrayDiffElement.prototype.common = function() {
			return oldIndex !== undefined && newIndex !== undefined;
		};
		
		return ArrayDiffElement;
	}
	
	
	// Use define() if using AMD/RequireJS
	if (typeof define === 'function' && define.amd) {
		define([], defineArrayDiffElement);
	}
	
	// Otherwise define it in the global context
	else {
		self.ArrayDiffElement = defineArrayDiffElement();
	}
	
})();