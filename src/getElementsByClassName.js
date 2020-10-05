// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, element) {
  // define element if it is undefined
  element = element === undefined ? document.body : element;

  // create results array
  var results = [];

  // if element contains classList and classList contains className
  if (element.classList && element.classList.contains(className)) {
    results.push(element);
  }

  // if element contains child Nodes
  if (element.childNodes) {
    _.each(element.childNodes, function(item) {
      results = results.concat(getElementsByClassName(className, item));
    });
  }

  return results;
};