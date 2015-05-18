var tape = require('tape');
var fs = require('fs')
var concat = require('concat-stream')
var hyperquest = require('hyperquest')
var http = require('http')
var Handler = require('../handler')

function runRequest(done){
  hyperquest('http://127.0.0.1:8080').pipe(concat(function(body){
    body = body.toString()
    done(null, body)
  }))
}

function buildServer(path, done){
  var handler = Handler({
    path:'/tmp/hello.txt'
  })
  var server = http.createServer(handler)
  server.listen(8080, function(){
    done(null, server)
  })
}

tape('the server should increment the file each time it is hit', function(t){

  buildServer('/tmp/hello.txt', function(err, server){
    runRequest(function(err, count){
      t.equal(count, "1", "the first count is 1")
      runRequest(function(err, count){
        t.equal(count, "2", "the second count is 2")
        runRequest(function(err, count){
          t.equal(count, "3", "the third count is 3")
          server.close(function(){
            t.end()  
          })
        })
      })
    })
  })

})

tape('the server should pick up an existing file and use that', function(t){
  fs.writeFileSync('/tmp/hello2.txt', '56', 'utf8')

  buildServer('/tmp/hello2.txt', function(err, server){
    runRequest(function(err, count){
      t.equal(count, "57", "the first count is 57")
      runRequest(function(err, count){
        t.equal(count, "58", "the second count is 58")
        runRequest(function(err, count){
          t.equal(count, "59", "the third count is 59")
          server.close(function(){
            t.end()  
          })
        })
      })
    })
  })

})