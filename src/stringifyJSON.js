// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //primitive
  if (typeof obj === 'number') {
    return obj.toString();
  }
  if (typeof obj === 'boolean') {
    if (obj === true) {
      return 'true';
    } else {
      return 'false';
    }
  }
  if (obj === null) {
    return 'null';
  }
  if (typeof obj === 'string') {
    return `"${obj}"`;
  }
  //arrays
  if (Array.isArray(obj)) {
    var results = '[';
    for (var i = 0; i < obj.length; i++) {
      if (i === obj.length-1) {
        results += stringifyJSON(obj[i]);
      } else {
        results += stringifyJSON(obj[i]) + ',';
      }
    }
    results += ']';
    return results;
  }
  //objects
  if (typeof obj === 'object') {
    var results = '{';
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      if (i === keys.length - 1) {
        results += stringifyJSON(keys[i]) + ':' + stringifyJSON(obj[keys[i]]);
      } else {
        results += stringifyJSON(keys[i]) + ':' + stringifyJSON(obj[keys[i]]) + ',';
      }
    }
    results += '}';
    return results;
  }
}

var object = {'a': 1, 'b': 2, 'c': [3, 4, 5]};

console.log(JSON.stringify(object));
console.log(stringifyJSON(object));