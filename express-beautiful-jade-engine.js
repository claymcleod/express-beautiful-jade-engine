var jade = require('jade');
var beautify_html = require('js-beautify').html;

module.exports = function (filePath, options, callback) {
    var rendered = jade.__express(filePath, options, function (err, result){
      if (err) return callback(err, null);
      return callback(err, beautify_html(result));
 	});
}