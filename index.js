var http = require('http')
var Handler = require('./handler')
var args = require('minimist')(process.argv, {
  alias:{
    p:'port',
    f:'file'
  },
  default:{
    port:process.env['PORT'] || 80,
    file:process.env['FILE'] || '/tmp/helloincrement.txt'
  }
});

var handler = Handler({
  file:opts.file
})

var server http.createServer(handler)

server.listen(args.port, function(){
  console.log('server listening on port: ' + args.port)
})