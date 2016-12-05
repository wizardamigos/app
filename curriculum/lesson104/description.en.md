---
{
  "title": "Theory (functions: returning a function)",
  "duration": "9:27"
}
---

**Advanced**
Here we explain what it means when we `return` a `function` from a `function`.
This is called a `higher order function`.

It is like a word machine that can produce words.
For example:

```js
function addX (x) {
  return function (y) { return x + y; }
}
var add5 = addX(5)

add5(10) // => 15
add5(14) // => 19
```
