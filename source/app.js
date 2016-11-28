'use strict'
var sourcemaps  = require('source-map-support') // process.env == 'DEV' @TODO
if (window.location.protocol !== "file:") sourcemaps.install()
var path        = require('path')
var urify       = require('urify')
/******************************************************************************
  STACK
******************************************************************************/
const levelgate = require('_level-gate')
const db        = require('_db') // @TODO: -t findup-package-json
const router    = require('_router')
const engine    = require('_vcs2dom') // @TODO: fix vcs2dom
// const ud        = require('ud')

;(function parentComunicator (){
  'use strict'
  // document.domain = '0.0.0.0'
  // @TODO: set via ENV depending on mode DEV vs PROD
  // var origin = 'http://0.0.0.0:8000'
  var selforigin = '*'
  window.addEventListener("message", receiveMessage, false)
  function receiveMessage(event) { // ESOVA APP
    var origin = event.origin
    if (origin === "http://fast.wistia.com") return
    else window.parent.postMessage('OK', selforigin)
  }
}())
/******************************************************************************
  CUSTOM
******************************************************************************/
// populate db with defaults
var dataSourceMapping = require('_dataSourceMapping')
// publish & spread changes from db
var dataSinkMapping = require('_dataSinkMapping')

var gate = levelgate(dataSourceMapping, dataSinkMapping)

var urlRouting  = require('_urlRouting')

var dataRouting = require('_dataRouting')

var actionMapping = require('_actionMapping') // how to deal with user input
                                        // maybe even from external network?

var opts = { force: true, testKeys: undefined }

/******************************************************************************
  ASSETS
******************************************************************************/
var src1 = urify(path.join(__dirname,'node_modules/_assets/Avenir-Roman.woff'))
/******************************************************************************
  LEGACY
******************************************************************************/
// var ENGINE = ud.defonce(module, function (STATE, RENDER) { ... }, 'ENGINE')
// var STATE = ud.defonce(module, function initialize () { ... }, 'STATE')
// var ROUTES = ud.defobj(module, ROUTER(STATE))
/******************************************************************************
  MAIN
******************************************************************************/
db(opts, app)

function app (error, db) {

  gate.pipe(db).pipe(gate)

  if (error) return

  var fonts =  {
    'Avenir Roman': src1
  }

  var globalStyles =
    `html { box-sizing: border-box; display: table; min-width: 100vw }\n`+
    `*, *:before, *:after { box-sizing: inherit; }\n`+
    `body { margin: 0; display: flex; flex-flow: column; min-height: 100vh; }\n`

  Object.keys(fonts).forEach(function (font) {
    globalStyles += `@font-face {\n`+
    `  font-family: ${font};\n`+
    `  src: url(${fonts[font]});\n`+
    `}\n`
  })

  var engine$ = engine({
    target: 'body', // document.body
    globalStyles: globalStyles
  })

  // @TODO: create root component here!

  const router$ = router(db, urlRouting, dataRouting)
  router$.pipe(engine$)
}
/******************************************************************************
  HOT MODULE RELOADING
******************************************************************************/
// EXECUTED EVERY TIME WHEN router gets HOT RELOADED, but not on INITIALZATION
// var id = setTimeout(function () {ENGINE.update(STATE)},0)
// ENGINE(ROUTER) => ROUTER is a context dependent RENDER function
// var route = ROUTES.match("/posts/show/1.json")
// ROUTES$.pipe(engine$)
// route.fn.apply(null, '[req, res, route.params, route.splats]')
