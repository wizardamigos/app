# Require NPM modules in codepen.io

## Open codepen.io
![Open codepen.io](https://github.com/wizardamigosinstitute/service/blob/master/curriculum/newLessons/ASSETS/codepen1.png?raw=true)

---
## Create new pen
![Create new pen](https://github.com/wizardamigosinstitute/service/blob/master/curriculum/newLessons/ASSETS/codepen2.png?raw=true)

---
## Minimize CSS section
![Minimize CSS section](https://github.com/wizardamigosinstitute/service/blob/master/curriculum/newLessons/ASSETS/codepen3.png?raw=true)

---
## Minimize HTML section
![Minimize HTML section](https://github.com/wizardamigosinstitute/service/blob/master/curriculum/newLessons/ASSETS/codepen4.png?raw=true)

---
## Click settings in JS section
![Click settings in JS section](https://github.com/wizardamigosinstitute/service/blob/master/curriculum/newLessons/ASSETS/codepen5.png?raw=true)

---
## Paste the link & click close
```
https://cdn.rawgit.com/serapath/e2b55cab315e60fbbffea7b43acd8749/raw/fc0d32703dc77cfa51405f198fa0eaea3e5a7bbb/require.js
```

![Paste the link](https://github.com/wizardamigosinstitute/service/blob/master/curriculum/newLessons/ASSETS/codepen6.png?raw=true)


---
## Copy paste a sample code in JS section
![Copy paste a sample code](https://github.com/wizardamigosinstitute/service/blob/master/curriculum/newLessons/ASSETS/codepen7.png?raw=true)

```js
var yo = require('yo-yo')
/* ---------------------------------------------------
		COLORS
--------------------------------------------------- */
var dB = '#081b53' // darkBlue
var b  = '#3022bb' // blue
var lB = '#7766fc' // lightBlue
var lP = '#f989ff' // lightPink
var dP = '#730d61' // darkPink
var B  = '#080707' // black
var g  = '#2e3f41' // grey
var sY = '#f7da8b' // skinYellow
var W  = '#ffffff' // white
/* ---------------------------------------------------
		IMAGE
--------------------------------------------------- */
var image = [
W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W,
W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W,
W, W, W, W, W, W, W, B, B, B, B, B, B, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W,
W, W, W, W, W, B, B, lB, lB, lB, lB, lB, lB, B, B, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W,
W, W, W, B, B, lB, lB, b, b, b, b, b, b, lB, lB, B, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W,
W, W, B, lB, b, b, dB, dB, dB, b, b, b, b, b, b, b, B, B, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W,
W, B, lB, B, B, B, B, b, b, dB, b, dB, b, b, b, b, b, b, B, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W,
W, W, B, W, W, W, W, B, dB, b, dB, b, b, dB, b, b, b, b, b, B, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W,
W, W, W, W, W, W, W, W, B, dB, b, dB, b, b, b, b, b, b, b, B, W, B, B, B, B, B, B, W, W, W, W, W, W, W, W, W, W, W, W, W,
W, W, W, W, W, W, W, W, W, B, dB, b, dB, b, dB, b, b, lB, lB, lB, B, lB, b, dB, b, b, b, B, W, W, W, W, W, W, W, W, W, W, W, W,
W, W, W, W, W, W, W, W, W, W, B, dB, dB, lB, b, B, B, dB, dB, dB, B, B, dB, b, dB, B, B, W, W, W, W, W, W, W, W, W, W, W, W, W,
W, W, W, W, W, W, W, W, W, B, B, lB, lB, b, B, W, W, B, B, B, W, W, B, dB, B, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W,
W, W, W, W, W, W, W, B, B, lB, b, b, b, B, W, B, B, W, B, W, B, B, W, B, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W,
W, W, W, W, W, B, B, lB, b, b, b, dB, dB, dB, B, sY, sY, B, sY, B, sY, sY, B, B, B, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W,
W, W, W, W, B, lB, b, b, dB, dB, dB, B, B, B, sY, W, W, sY, sY, W, W, sY, B, B, W, B, W, W, W, W, W, W, W, W, W, W, W, W, W, W,
W, W, W, B, b, dB, dB, dB, B, B, B, W, W, B, sY, W, lP, sY, sY, W, lP, sY, sY, B, W, B, W, W, W, W, W, W, W, W, W, W, W, W, W, W,
W, W, B, lB, b, B, B, B, W, W, W, W, W, B, sY, W, dP, sY, sY, W, dP, sY, sY, B, W, B, W, W, W, W, W, W, W, W, W, W, W, W, W, W,
W, W, W, B, B, W, W, B, W, W, W, B, B, sY, sY, sY, B, B, B, B, B, sY, sY, B, W, W, B, W, W, W, W, W, W, W, W, W, W, W, W, W,
W, W, W, W, W, W, B, W, B, W, W, B, sY, sY, sY, B, W, W, W, W, W, B, B, W, W, B, W, W, W, W, W, W, W, W, W, W, W, W, W, W,
W, W, W, W, W, W, B, W, W, W, W, B, sY, B, B, W, W, W, B, W, W, W, B, B, W, W, B, W, W, W, W, W, W, W, W, W, W, W, W, W,
W, W, W, W, W, W, B, W, B, W, W, W, W, W, W, W, W, B, W, B, W, W, W, W, B, B, W, W, W, W, W, W, W, W, W, W, W, W, W, W,
W, W, W, W, W, W, W, B, B, B, B, W, W, B, B, B, B, W, W, W, B, B, B, B, W, B, W, B, B, B, B, B, B, B, W, W, W, W, W, W,
W, W, W, W, W, W, B, lB, b, b, B, W, W, W, W, W, W, W, W, W, B, W, W, W, B, W, W, B, g, g, g, g, g, B, W, W, W, W, W, W,
W, W, W, W, W, W, W, B, lB, B, b, B, B, B, B, B, W, W, W, B, W, B, B, B, B, B, W, B, g, g, g, g, g, B, W, W, W, W, W, W,
W, W, W, W, W, W, W, W, B, B, lB, lB, b, lB, b, b, B, B, B, B, B, B, B, B, sY, sY, B, g, g, g, g, g, B, W, W, W, W, W,
W, W, W, W, W, W, W, W, W, W, B, lB, b, b, lB, b, b, b, B, sY, sY, sY, B, sY, sY, B, sY, sY, B, g, g, g, g, g, B, W, W, W, W, W, W, W,
W, W, W, W, W, W, W, W, B, lB, lB, lB, b, b, b, b, B, sY, sY, sY, B, sY, sY, B, B, B, g, g, g, g, g, B, W, W, W, W, W, W, W, W,
W, W, W, W, W, W, W, W, B, lB, lB, b, lB, b, b, B, b, B, B, B, B, B, B, B, B, g, B, B, B, B, B, B, W, W, W, W, W, W, W, W, W,
W, W, W, W, W, W, W, B, lB, b, b, b, b, b, B, b, B, b, B, b, B, B, B, B, B, B, B, B, B, B, B, B, B, W, W, W, W, W, W,
W, W, W, W, W, W, W, B, lB, lB, b, b, b, b, B, B, B, B, b, b, B, B, g, g, g, g, g, g, g, g, g, g, g, g, B, W, W, W, W, W,
W, W, W, W, W, W, W, B, lB, b, lB, b, b, B, B, B, B, B, B, b, B, B, g, g, g, g, g, g, g, g, g, g, g, g, B, W, W, W, W, W,
W, W, W, W, W, W, W, B, lB, b, b, b, B, dB, B, lB, B, dB, B, b, b, B, g, g, B, B, B, B, B, B, B, B, g, g, B, W, W, W, W, W,
W, W, W, W, W, W, B, lB, b, lB, b, b, B, B, B, b, b, B, B, B, b, B, g, g, B, W, W, W, W, W, W, B, g, g, B, W, W, W, W, W,
W, W, W, W, W, W, B, b, b, b, B, B, B, B, B, B, lB, B, B, B, B, B, g, g, B, W, W, W, W, W, W, B, g, g, B, W, W, W, W, W,
W, W, W, W, W, B, b, b, B, B, W, W, B, B, B, B, B, B, B, B, B, B, g, g, B, W, W, W, W, W, W, B, g, g, B, W, W, W, W, W
]
/* ---------------------------------------------------
		FUNCTIONS
--------------------------------------------------- */
function draw () {
  var size = 10
  return image.map((x,i)=>yo`<rect x=${(i%40 * size)} y=${Math.floor(i/40)*size} width=${size} height=${size} fill='${x}'>`)
}

var el = yo`<svg viewbox="0 0 100 100" width="800" height="500" >${draw()} </svg>`
document.body.appendChild(el)
```
