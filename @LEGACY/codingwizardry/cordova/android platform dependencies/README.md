# REQUIREMENTS: Android Environment
* on Mac OSX (...)
* on windows (use https://chocolatey.org)
* on linux (see below)


### + Install all `Platform SDKs` (for which you want to develop)

[xcode]: http://developer.apple.com/xcode/ ("XCode IDE for Mac OSX")
[jdk]:  http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html ("Java SE Development Kit (JDK7+)")
[python]: https://www.python.org/downloads/ ("Phyton 2.x+")
[ant]: http://ftp.halifax.rwth-aachen.de/apache//ant/binaries/apache-ant-1.9.5-bin.tar.gz ("Apache Ant 1.9.3+")
[android]: http://developer.android.com/sdk/index.html#linux-bundle ("Android SDK")
[osx]: http://en.wikipedia.org/wiki/OS_X ("Mac OSX")

#### `target`: ...

##### Install ...
1. ...


#### `target`: iPhone, iPad or other apple devices

##### Install `Xcode`
(**Note:** Will only work an [`Mac OSX`][osx])
1. **To find download url, google for:** `download xcode`
2. **download & install:** [`XCode`][xcode]
3. ...

##### Install ...
1. ...


#### `target`: android

##### Install `Phyton` `@deprecated`
The Crosswalk Android download contains a Python script.  
It can be used to make a self-contained package (.apk file) from an HTML5 app.
1. **To find download url, google for:** `download phyton`
2. **download & install:** [`phyton 2.x`][phyton]
  * **alternative:**
    * **$>** `sudo apt-get install python` #(on `ubuntu/linux mint/...`)
4. **check success:**
  * **$>** `python --version` #(e.g. => **python 2.7.6** or newer)

##### Install `Java SDK`
1. **To find download url, google for:** `java se development kit`
2. **download & install/unpack:** [jd7+][jdk]
  * Accept License Agreement
  * **$>** `tar zxvf <jdk file>.tar.gz` #(on `ubuntu/linux mint/...`)
  * **$>** `mv <unzipped directory> java/`
3. **Edit your `~/.bashrc` file:**
  * **$>** `atom ~/.bashrc` #(or whatever powers your `cli`)
  * insert the following lines at end of the file, save and close it:
```bash
#::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
# SET JAVA ENVIRONMENT
#::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
export JAVA_HOME="<path to JDK>" #(dont include the `bin/` dir here)
export PATH=<unpacked directory path to JDK>/bin:$PATH
```
4. **Refresh you current terminal session with those changes:**
  * **$>** `souce ~/.bashrc` #(to update your current `cli`)
5. **Alternative to (1,2,3&4):** `sudo apt-get install openjdk-7-jdk` #(on `ubuntu/linux mint/...`)
6. **check success:**
  * **$>** `java -version`
    * (e.g. => **java version "1.7.0_45"** or newer)
    * (e.g. => **"Java(TM) SE Runtime Environment (build 1.7.0_45-b18)"** or newer)
      * alternative: **"OpenJDK Runtime Environment (IcedTea 2.5.5) (7u79-2.5.5-0ubuntu0.14.04.2)"** or newer)
    * (e.g. => **"Java HotSpot(TM) 64-Bit Server VM (build 24.45-b08, mixed mode)"** or newer)
      * alternative: **"OpenJDK 64-Bit Server VM (build 24.79-b02, mixed mode)"** or newer)

##### Install `Apache Ant`
1. **To find download url, google for:** `download apache ant`
2. **download & unpack/install:** [`apache ant 1.9.3+`][ant]
  * **$>** `tar zxvf <ant file>.tar.gz` #(or winzip?) (on `ubuntu/linux mint/...`)
  * **$>** `mv <unzipped directory> ant/`
3. **Edit your `~/.bashrc` file:**
  * **$>** `atom ~/.bashrc` #(or whatever powers your `cli`)
  * insert the following lines at end of the file, save and close it:
```bash
#::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
# SET ANT ENVIRONMENT
#::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
export PATH=<path to ant>/bin:$PATH
```
4. **Refresh you current terminal session with those changes:**
  * **$>** `souce ~/.bashrc` #(to update your current `cli`)
5. **Alternative to (1,2,3&4):** `sudo apt-get install ant` #(on `ubuntu/linux mint/...`)
6. **check success:**
  * **$>** `ant -version` #(e.g. => **"Apache Ant(TM) version 1.9.3 compiled on December 23 2013"** or newer)

##### Install `Android SDK`
1. **To find download url, google for:** `download android SDK`
2. **download & install/unpack:** [`Android Stand-alone SDK Tools`][android]
  * **$>** `tar zxvf <android sdk file>.tgz` #(or winzip?) (on `ubuntu/linux mint/...`)
  * **$>** `sudo mv android-sdk-linux /usr/local/`
3. **Edit your `~/.bashrc` file:**
  * **$>** `atom ~/.bashrc` #(or whatever powers your `cli`)
  * insert the following lines at end of the file, save and close it:
```bash
#::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
# ANDROID SDK
#::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
export ANDROID_SDK_HOME="/usr/local/android-sdk-linux"
export ANDROID_HOME="$ANDROID_SDK_HOME/tools"
export PATH="$ANDROID_SDK_HOME/tools:$PATH"
export PATH="$ANDROID_SDK_HOME/platform-tools:$PATH"
export PATH="$ANDROID_SDK_HOME:$PATH"
```
4. **Refresh you current terminal session with those changes:**
  * **$>** `souce ~/.bashrc` #(to update your current `cli`)
5. **Run update:** `android update sdk --no-ui`
6. **check success:**
  * **$>** `adb version` #(e.g. => **"Android Debug Bridge version 1.0.32"** or newer)
  * **$>** `android --help` prints out supported commands
  * **$>** `emulator -version`
    > Android emulator version standalone
    > ,,,
