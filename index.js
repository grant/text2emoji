
var BANNED_ALIASES = ['it', 'on', 'a', 'us'];
var fs = require('fs');

// Converts text to emoji codes
// Usage: function('input here')
module.exports = function(input) {
  if (input) {
    console.log(convert(input));
  } else {
    process.stdin.on('data', function(input) {
      process.stdout.write(convert(input.toString()));
    });
  }
};

// Converts text to emoji code
// Ex. "You're up to no good." -> "You're up to :no_good:"
function convert (input) {
  var output = input;
  
  // Load keywords
  var map = require('./map.json');
  var keywords = Object.keys(map);

  // Replace the keywords
  for (var i in keywords) {
    var keyword = keywords[i];


    // Setup keyword aliases (i.e. words that map to the emoji keyword)
    var aliases = map[keyword];
    // A couple of words are banned because they are so common.
    // We only want to search the ones that aren't banned.
    // You can still reference them with other aliases
    if (BANNED_ALIASES.indexOf(keyword) === -1) {
      aliases.push(keyword);
    }

    // Go through each emoji alias
    for (var j in aliases) {
      var alias = aliases[j];
      
      // Remove colon keywords (if they are already there)
      output = output.replace(RegExp(':'+escapeRegExp(alias)+':','g'), alias);

      // Add colon keywords
      output = output.replace(RegExp('\\b'+escapeRegExp(alias)+'\\b','gi'), ':'+keyword+':');
    }
  }

  return output;
}

// Escapes regex characters
function escapeRegExp(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}