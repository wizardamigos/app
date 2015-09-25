#  Get started with `Cordova` & `Crosswalk`
If you are already partly or fully configured, feel free to skip some or all setup steps.  

**If you run into any trouble with the following steps or think they are hard to understand, misleading or otherwise lacking (e.g. typos or broken links), please [`open an issue`](openIssue) and tell us about it. Thank you :-)**

**Abbreviations:**
* **$>** `pwd` **#means:** *"Open your [`cli`][cli], type "`pwd`" and press the  [`<enter key>`][enterKey] on your [`keyboard`][keyboard]"*

**Requirements:**
* **You** should already have set up your [`Android Environment`](./requirements.md)


# Cordova & Crosswalk
Apache Cordova is a opensource tool that allows you
to build mobile apps using html, css and javascript.

**cordova gives you:**
* access to device sensors (such as geolocation, accelerometer, camera, etc) via a javascript interface.
* Supports iOS, Android, Windows Phone, Blackberry, Firefox OS, Ubuntu, Windows and Browser platforms.

## 1. Install [`cordova`](https://www.npmjs.com/package/cordova)
1. **$>** `npm install -g cordova` or `npm update -g cordova` if installed
2. **Verify progress:**
  1. **$>** `cordova -v`
  > 5.3.1


## 2. Create project scaffold
01. **$>** `mkdir <appname> && cd <appname>`
02. **$>** `echo "# <appname>" > README.md`
03. **$>** `npm init` # to initialize project
  * `name:` <appname>
  * `version:` 0.0.1
  * `description:` <describe your mobile app>
  * `entry point:` SOURCE/index.js
  * `git repository:` <add url to remote git repository (if exists)>
  * `keywords:` <add comma seperated list of descriptive app tags>
  * `licence:` <leave blank or name the license you give to your app>
  * `Is this ok?:` (yes) <press enter>
04. **$>** `echo "node_modules/" >> .gitignore`
05. **$>** `echo "!source/node_modules/" >> .gitignore`
06. **$>** `echo "npm-debug.log" >> .gitignore`
07. **$>** `echo "targets/" >> .gitignore`

08. **$>** `mkdir source`
09. **$>** `echo "<body><script src='public/bundle.js'></script></body>" > index.html`
10. **$>** `echo "setInterval(function(a){document.body.style.backgroundColor='#'+(~~(Math.random()*(1<<24))).toString(16)}, 20)" > public/index.js`
11. **$>** `mkdir target && cd target`
11. **$>** `cordova create -d cordova` # `-d` option displays information about its progress. (later use `cordova platform update android` for updates)
```bash
# LOCATION  = Foldername to be created for the App
# ID         = reverse domain-style identifier (into config.xml)
# NAME      = Display Title (into config.xml)
cordova create LOCATION ID NAME
cordova create hello com.example.hello HelloWorld       // @TODO - config
```


12. **$>** `cd.. && echo "TARGETS/cordova/platforms/" >> .gitignore`
13. **$>** `echo "TARGETS/cordova/www/" >> .gitignore`
14. **$>** `rm -rf cordova/hooks` (it's a deprecated feature)
  * http://cordova.apache.org/docs/en/edge/guide_appdev_hooks_index.md.html#Hooks%20Guide

15. **Verify & Save progress:**
  * **$>** `tree -L 2` or `ls -a` or `dir` to check directory concent
  ```js
  /*
  <appname>/.                            # the project called "boilerplate"
            ├── (BUNDLE/)                # YOUR WEB APP (compile generated)
            |
            ├── cordova/
            |   ├── config.xml               # APP CONFIG (see [1])
            |   |# stores information about your applications
            |   |
            |   ├── plugins/                 # your installed plugins
            |   |
            |   ├── (platforms/)             # (native platform projects)
            |   |   ├── (assets/)
            |   |   |   └── (www/)           # (APP)    (compile generated)
            |   |   └── (res/)
            |   |       └── (xml/)
            |   |           └── (config.xml) # (CONFIG) (compile generated)
            |   |
            |   └── (www/)                   # (APP)    (compile generated)
            |       |# npm scripts copy this from "./SOURCE"
            |       └── (index.html)         #
            |
            ├── .gitignore               # "(...)" ignored by version control
            ├── index.html               # For use in Browser (e.g. gh-page)
            ├── (node_modules/)          # installed project dependencies
            ├── package.json             # PROJECT CONFIG
            ├── README.md                # project description
            └── SOURCE/                  # <= YOUR WEB APP
                └── index.js
  */
  ```
  **[1]:** http://cordova.apache.org/docs/en/5.0.0/config_ref_index.md.html
  * **$>** `git init`
  * **$>** `git add -A`
  * **$>** `git commit -m "ADD project scaffolding"`


## 3. Add Target Platform (e.g. android)
1. **$>** `cd cordova`
2. **$>** `cordova platforms add android --save`
  * **Always be prepared to blow away a platform**
    * The number of times the only way I could get a project to build was to
    * `cordova platform remove android`
    * `cordova platform add android`
  * `cordova platform save` will save all installed platforms.
    This results in the following line being added to your `config.xml`:
  ```html
  <engine name="android" spec="^4.1.1" />
  ```
  and the file structure to looks now like:
  ```js
  /*
  <appname>/.                            # the project called "boilerplate"
            ├── ([BUNDLE/])              # YOUR WEB APP (compile generated)
            |
            ├── [cordova/]
            |   ├── config.xml           # (changed) APP CONFIG (see [1])
            |   |# stores information about your applications
            |   |
            |   ├── [plugins/]                      # (new) installed plugins
            |   |   |# gets built into each platform to support certain features
            |   │   ├── [android.json]              # (new)
            |   │   ├── [cordova-plugin-whitelist]  # (new) DEFAULT PLUGIN
            |   │   └── [fetch.json]                # (new)
            |   |
            |   ├── ([platforms/])       # (native platform projects)
            |   |   |# should be checked into version control
            |   |   |#(new)
            |   |   |
            |   │   ├── [android]                # (new)
            |   |   |   | # ANDROID PLATFORM BUILD ARTIFACT
            |   |   |   ├── (assets/)
            |   |   |   |   └── (www/)           # (APP)    (compile generated)
            |   |   |   └── (res/)
            |   |   |       └── (xml/)
            |   |   |           └── (config.xml) # (CONFIG) (compile generated)
            |   |   |
            |   │   ├── ...              # (potentially more platforms)
            |   │   ├── [platforms.json]            # (new)
            |   |   │   # but sparing the `www/` inside
            |   |   └── [www]                       # (doesnt exist yet)
            |   |
            |   └── ([www/])                 # (APP)    (compile generated)
            |       |# Source Code of the app which consists at least of
            |       |# an "index.html" file
            |       └── (index.html)
            |
            ├── .gitignore               # "(...)" ignored by version control
            ├── index.html               # For use in Browser (e.g. gh-page)
            ├── ([node_modules/])        # installed project dependencies
            ├── package.json             # PROJECT CONFIG
            ├── README.md                # project description
            └── [SOURCE/]                # <= YOUR WEB APP
                └── index.js
  */
  ```
4. **Verify:**
  1. **$>** `git diff`
  2. **$>** `git status`
  3. **$>** `cordova platforms ls`
5. **Save progress**
  * **$>** `git add -A`
  * **$>** `git commit -m "ADD android platform"`

## 3a. Add android platform dependencies
* `cordova requirements` # everything should be marked as `installed`
[android platform dependencies](./android platform dependencies/README.md)

## 4. Add Crosswalk
Is a `chromium` & `blink` based runtime focused on HTML5, called a "web view"),
bundled with your app to overcome cross-browser inconsistencies
https://crosswalk-project.org/documentation/cordova/cordova_4.html
1. **$>** `cordova plugin add cordova-plugin-crosswalk-webview --save`
  * Adds [crosswalk webview cordova plugin](https://www.npmjs.com/package/cordova-plugin-crosswalk-webview/)
  * `cordova platform save` will save all installed platforms.
2. **Verify:**
  1. **$>** `git diff`
  2. **$>** `git status`
3. **Save progress**
  * **$>** `git add -A`
  * **$>** `git commit -m "ADD crosswalk"`

## 5. Build & Deploy the app
1. **$>** `cordova run android --list` to see all available targets
  > Available android devices:
    4PEQOJ49BUZ969G6
    Available android virtual devices:
    AVD_for_Galaxy_Nexus_by_Google
    AVD_for_Nexus_6_by_Google

2. **$>** `cordova run android --target=<target_name>`
  * to run application on a specific target (**device** or **emulator**)
  * e.g. `cordova run android --target="Nexus4_emulator"`
  * same as `cordova build android`, but in addition
    * starts the <target>
    * pushes the `android-debug.apk` to the <target> and installs it.
    * opens the app on the <target> device
  * Alias:
    * `cordova run android` # to run app on usb connected real device
    * `--emulator` flag is default
    * `--device` flag, to deploy app on a connected usb device
    * `cordova run --emulator` => alias for `cordova emulate android`



### Phonegap (Alternative)
http://app.phonegap.com/
If you have a windows phone, Android or iOS device, you can launch your apps onto your device by using the PhoneGap Developer App. Just search for it in your respective app stores on your devices.
1.  Install the `Phonegap Developer App` from the Appstore
  * This will allow you to create and test apps without having to worry about provisioning profiles (iOS)
2. Make sure your device and your laptop are on the same wifi network.
3.  **$>** `npm install -g phonegap`
4.  **$>** `phonegap serve`# => ip:host address of phonegap app server
5. Open the phonegap developer app on your device & enter the ip:port to connect
6. **Verify:**
  1. You should now be able to see the hello world cordova app on your device
  2. As you edit your `www` directory, the app will auto update on your device


## 5. Keytool & Signing
* To generate a keystore and private key, used to sign your .apk file. `Keytool` is part of the JDK.
* `Jarsigner` (or similar signing tool)
* To sign your .apk file with a private key generated by `Keytool`. `Jarsigner` is part of the JDK.
