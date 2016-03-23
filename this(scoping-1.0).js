//Problem: Why does memoAdd(2,3) work but once(add(2,3)) doesn't?


var once = function(func) {
    var alreadyCalled = false;
    var result;

    return function() {
      if (!alreadyCalled) {
        result = func.apply(this, arguments);
        alreadyCalled = true;
      }
      return result;
    };
  };

var add = function(a, b) {
	console.log('add was called');
	return a + b;
};

var memoAdd = once(add);


console.log(once(add(2, 3)));
console.log(memoAdd(2, 3));
console.log(memoAdd(2, 3));


