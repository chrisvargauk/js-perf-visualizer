/**
 * Hack in support for Function.name for browsers that don't support it.
 * IE, I'm looking at you.
 * Source: https://matt.scharley.me/2012/03/monkey-patch-name-ie.html
 **/
if (Function.prototype.name === undefined && Object.defineProperty !== undefined) {
  Object.defineProperty(Function.prototype, 'name', {
    get: function() {
      var funcNameRegex = /function\s([^(]{1,})\(/;
      var results = (funcNameRegex).exec((this).toString());
      return (results && results.length > 1) ? results[1].trim() : "";
    },
    set: function(value) {}
  });
}