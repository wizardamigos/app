# START A NEW JS PROJECT

```bash
#src/index.js

npm init

cat > package.json
"scripts": {
    "watch": "watchify src/index.js -p [ urify-emitter -l 100 -o public/browser -b public/browser ] --it urify -p [ browserify-livereload --host 127.0.0.1 --port 1337 ] -o public/browser/bundle.js",
    "www": "ecstatic ./ -p 5000 -H 'Access-Control-Allow-Origin: *'",
    "start": "npm run watch & npm run www",
    "build": "browserify -p [ urify-emitter -l 100 -o public/browser -b public/browser ] --it urify src/index.js > public/browser/bundle.js",
    "open": "opn http://0.0.0.0:5000/ -- 'google chrome'",
    "test": "echo \"Error: no test specified\" && exit 1"
}
# press <ctrl+d> to finish file content

# install dev dependencies
npm install browserify-livereload ecstatic urify-emitter watchify browserify-livereload browserify opn-cli --save-dev.

# install project dependencies
npm install bell csjs-inject minixhr --save  // with bell
npm install yo-yo csjs-inject minixhr --save // with yo-yo

cat > index.html
    <html>
      <head>
        <title> your project </title>
      </head>
      <body>
        <script src="public/browser/bundle.js"></script>
      </body>
    </html>
<script src="public/browser/bundle.js"></script>
# press <ctrl+d> to finish file content

mkdir src/assets
echo "var growth2 = datauri(__dirname + '/assets/growth2.jpg’)" > index.js

npm start
```
