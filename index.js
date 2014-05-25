
var fs = require('fs');

// Converts text to emoji codes
// Usage: function('file.txt')
module.exports = function(filePath) {
  if (!filePath) {
    // Path is required
    console.error('Must pass a filepath');
    console.log('$ text2emoji file.txt');
  } else {
    var content = fs.readFileSync(filePath, 'utf8');
    fs.writeFileSync(filePath, convert(content));
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
    
    // Remove colon keywords (if they are already there)
    output = output.replace(RegExp(':'+escapeRegExp(keyword)+':','g'), keyword);

    // Add colon keywords
    output = output.replace(RegExp('\\b'+escapeRegExp(keyword)+'\\b','g'), ':'+keyword+':');
  }

  return output;
}

// Escapes regex characters
function escapeRegExp(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}