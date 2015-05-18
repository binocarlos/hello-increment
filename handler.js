var fs = require('fs');

module.exports = function(opts){
  opts = opts || {}
  var path = opts.path || '/tmp/helloincrement.txt'

  var number = 0
  if(fs.existsSync(path)){
    var number = parseInt(fs.readFileSync(path, 'utf8'))
  }

  return function(req, res){
    number++
    fs.writeFileSync(path, number, 'utf8')
    res.end("" + number)
  } 
}