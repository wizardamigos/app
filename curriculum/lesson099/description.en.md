---
{
  "title": "Theory (functions: returning an object)",
  "duration": "8:54"
}
---

Now one more step is returning a collection of functions instead of a single function.

A factory that produces cars would be an example.

```js
function coloredCarsFactory (color) {
  return {
    start: function () {
      console.log("start " + color + " car")      
    },
    stop: function () {
      console.log("stop " + color + " car")      
    }
  }
}

var redcar = coloredCarsFactor('red')
var greencar = coloredCarsFactor('green')

redcar.start() // start red car
redcar.stop() // stop red car
greencar.start() // start green car
greencar.stop() // stop green car
```
