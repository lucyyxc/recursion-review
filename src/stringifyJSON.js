// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //primitive
  if (obj === undefined || typeof obj === 'function') {
    return undefined;
  }
  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    return `${obj}`;
  }
  if (typeof obj === 'string') {
    return `"${obj}"`;
  }
  //arrays
  if (Array.isArray(obj)) {
    var results = '[';
    for (var i = 0; i < obj.length; i++) {
      // if element is not a function or undefined
      if (obj[i] !== undefined && typeof obj[i] !== 'function') {
        if (i === obj.length-1) {
          results += stringifyJSON(obj[i]);
        } else {
          results += stringifyJSON(obj[i]) + ',';
        }
      } else {
        if (i === obj.length-1) {
          results += 'null';
        } else {
          results += 'null,';
        }
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
      if (obj[keys[i]] === undefined || typeof obj[keys[i]] === 'function') {
        continue;
      } else {
        if (i !== keys.length-1 && (obj[keys[i+1]] !== undefined && typeof obj[keys[i+1]] !== 'function')) {
          results += stringifyJSON(keys[i]) + ':' + stringifyJSON(obj[keys[i]]) + ',';
        } else {
          results += stringifyJSON(keys[i]) + ':' + stringifyJSON(obj[keys[i]]);
        }
      }
    }
    results += '}';
    return results;
  }
}