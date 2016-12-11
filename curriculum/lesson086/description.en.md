---
{
  "title": "Code Combat (The Geometry of Flowers)",
  "duration": "9:41"
}
---

Every time you see yourself repeating certain lines of codes - that is a **strong indicator** to write a `function` and use it instead of repeating yourself.

For example:
```js
var enemy = hero.findNearestEnemy();
hero.attack(enemy);
hero.attack(enemy);

var enemy = hero.findNearestEnemy();
hero.attack(enemy);
hero.attack(enemy);
```

would instead be:

```js
// wrap your duplicated code in a function definition
function seekAndDestroy () {
  var enemy = hero.findNearestEnemy();
  hero.attack(enemy);
  hero.attack(enemy);
}
// replace your duplicated code with function calls
seekAndDestroy();
seekAndDestroy();
```
