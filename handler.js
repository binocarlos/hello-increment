var fs = require('fs');

module.exports = function(opts){
  opts = opts || {}
  var file = opts.file || '/tmp/helloincrement.txt'

  var number = 0
  if(fs.existsSync(file)){
    number = parseInt(fs.readFileSync(file, 'utf8'))
  }

  return function(req, res){
    number++
    fs.writeFileSync(file, number, 'utf8')
    res.end("" + number)
  } 
}