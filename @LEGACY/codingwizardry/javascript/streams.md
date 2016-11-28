# Motivation
> Once you learn the stream api, you can just snap together
> these streaming modules like lego bricks or garden hoses instead of
> having to remember how to push data through wonky non-streaming custom APIs.
> Streams make programming in node simple, elegant, and composable.

# GLOSSARY
* `producer` (also `source`) - a stream that produces `chunks`
* `consumer` (also `destination`) - a stream that consumes `chunks`
* `backpressure` - ???
* ...

# NAMING CONVENTION
**There are 5 kinds of streams:**
1. `producer` (`source` only)
  * **readable** stream `streamName$r`  - can act as `source$`
2. `consumer` (`destination` only)
  * **writable**  stream `streamName$w`  - can act as `destination$`
3. `consumer` or `producer` (serve as `source` or `destination`)
  * **transform** stream `streamName$t`  - can act as `source$` or `destination$`
  * **duplex** stream `streamName$d`  - can act as `source$` or `destination$`
  * **"classic"** stream `streamName$`   - can act as ???

# EVENTS
Streams are Objects that emit events.
* `data` event
  * e.g. `stream$.on('data', function callback (data) { });`
* `error` event
  * e.g. `stream$.on('error', function callback (error) { });`
* `end` event
  * `stream$.on('end', function callback () { });`
* `close` event
  * `stream$.on('close', function callback () { });`

# METHODS
## `source$.push(...)`
* **push chunks** to a stream
* 'chunks' of content can be 'pushed' before pipe()
* 'chunks' get 'buffered' until a 'consumer' connects, e.g via .pipe()
* BUT:
  * avoid buffering
  * generate data only when consumer asks

## `source$.push(null)`
* close stream - indicates `source$` is done outputting data

## `source$._read`
Instead of 'buffering', chunks can be pushed **on-demand** after consumer$ connects
```js
source$._read = function _read (size) {
  // size: amount of bytes consumer wants to read (can be ignored)
  var chunk = 'some data';
  this.push(chunk);
}
```

## `source$.on('readable')`
* When data is available, the 'readable' event fires and you can call .read() to fetch some data from the buffer.

## `source$.read(n)`
* When the stream is finished, `.read()` returns null because there are no more bytes to fetch.
* `read(n)` returns "n bytes", but not for object streams

## `source$.unshift(data)`
* to put back data so that the same read logic will fire when `source$.read()` gives you more data than you wanted.
* Using `source$.unshift(data)` prevents us from making unnecessary buffer copies.

## `source$.pipe(destination$)`
* chainable: `function pipe (consumer$) { /*...*/ return consumer$ }`
* connects streams together
```js
a.pipe(b).pipe(c).pipe(d);
// or
a.pipe(b);
b.pipe(c);
c.pipe(d);
// or
// terminal$> a | b | c | d
```

## `._write(chunk, enc, next)` - (writable stream)


# @TODO: LESEZEICHEN:

https://github.com/substack/stream-handbook#consuming-a-readable-stream




  ```js
  var src = require('stream').Readable; // readableSourceStream
  var	dst = process.stdout;             // destinationWritableStream
  var counter;
  // push buffers until consumer is ready to read
  ```


# STREAMS & STREAM FACTORIES

## READ STREAMS
```js
// nodejs built-in
var Readable  = require('stream').Readable;
var opts      = null; // default
// to push arbitrary values, not just string:
var opts      = { objectMode: true };
var read$     = Readable(opts); // or 'new Readable;'
// Optional
read$._read   = function (size) {
  // ... @TODO
};
```

## WRITE STREAMS
```js
// nodejs built-in
var Writable  = require('stream').Writable;
var opts      = null; //default
// if source$ pipe()'s strings, you can
// prevent having them converted into Buffers
var opts      = { decodeStrings: false };
var write$    = Writable(opts);// or 'new Writable;'
// Optional:
write$._write = function (chunk, enc, next) {
  // chunk      - data written by producer
  // enc        - encoding
  // next(err)  - callback: allows producer to write more data (passing "err" emits "error event" on stream)
    console.dir(chunk);
    next();
};
```
## MORE STREAMS
```js
// READ STREAMS
var lines$    = require('fs').createReadStream('file.txt');
var stdin$    = process.stdin;

// Other Streams
var http      = require('http');
http.createServer(function (request$, response$) { }).listen(1337);

// WRITE STREAMS
var stdout$   = process.stdout;

// Through Stream Factories
var through   = require('through');
var through2  = require('through2');
var split     = require('split'); // line parsing loagic
var concat    = require('concat-stream');
  // calls callback(singleBuffer) // complete stream content in singleBuffer
var ws        = require('websocket-stream');
var request   = require('request');
var trumpet   = require('trumpet');
var duplexer  = require('duplexer');
var duplexer2 = require('duplexer2');

var oppressor = require('oppressor'); // compresses files
  // oppressor(request$)
```

























---

---

---

# COMPOSE NODE & UNIX STREAMS
```js
var Readable = require('stream').Readable; // You can also use util.inherits() to subclass "Readable stream"
var rs = Readable();

var c = 97 - 1;

rs._read = function (chunkSize) { //  `_read` function is only being called when the consumer requests
  // chunk size: specifies how many bytes consumer wants to read - can be ignored if wished
    if (c >= 'z'.charCodeAt(0)) return rs.push(null);

    setTimeout(function () { // necessary because the operating system requires
      // ...some time to send us the relevant signals to close the pipe
        rs.push(String.fromCharCode(++c));
    }, 100);
};

rs.pipe(process.stdout);

// These extra complications are necessary when interfacing with the external operating system pipes but are automatic when we interface directly with node streams the whole time.
process.on('exit', function () {
    console.error('\n_read() called ' + (c - 97) + ' times');
});
process.stdout.on('error', process.exit); // necessary because the operating system will send a SIGPIPE to our process when head is no longer interested in our program's output, which gets emitted as an EPIPE error on process.stdout.

// Running this program we can see that _read() is only called 5 times when we only request 5 bytes of output:
// _read() called 5 times =>
// $ node read2.js | head -c5 # => abcde
```

# STREAM MECHANICS
```bash
// Pumping Function
streams2: (PULL STYLE STREAM, which does not spray chunks at you)
pause() // will buffer stuff
resume()
data event handler
=> stream switches to old mode

NO: pause/resume/dataEvent
INSTEAD: read(), "readable event"
```

// read(n) to read n bytes/characters (if setEncoding())
1. Call read() until it returns null        // returns null if n bytes/chars are not available
2. wait for 'readable event'                // emits, as soon as n bytes/chars are available again
3. continue to read

1. call write() until it returns false
2. wait for 'drain' event
3. continue to write

... if u wanna pause, just do not call read()!
=> buffer will fill up to certain level, then stop pulling bytes from underlying system
=> then tcp will do its job / or file reading is stopped / or whatever data stream refers to

All which uses streams will have "low- & high watermark control" ovre their buffering
implement the
asynchronous `MyStream.prototype._read(n, callback)` method, or the
asynchronous `MyStream.prototype._write(chunk, callback)` method


(There are also base classes for Duplex, which does both, and for
Transform, which turns the input into the output via a
`_transform(chunk, outputFunction, callback)` method.)


 In 0.10 and later, you'd do
`output.on('finish', callback)`, and all Writable objects will emit a
'finish' event when you've called end() and all the write buffer is
cleared.

Mark, to pump at max rate you'd use .pipe().


///////////
But pipe only works if the writes are to another stream.  If they are to a db driver or something without pipe support then I have to do my own reads.  Or am I missing something here?

Well... yes.  If you want to siphon out the data as fast as possible,
and it's not going to a writable stream interface of some sort, then
you have to read() in a tight loop on every readable event.  That's
actually not much different than the 'data' event scheme.

Note that if you attach a 'data' event handler, then it'll do this for
