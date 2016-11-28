# REQUIREMENTS: Android Environment
**Check:** [Install Requirements](../../InstallingRequirements.md)
* `google-crhome` (web browser) => https://www.google.de/chrome/browser/desktop/
* `git` (decentralised version source control) => https://git-scm.com/
* `atom` (editor) => https://atom.io/
* `nvm`, `npm` & `node` => https://nodejs.org/en/


* **$>** `google-chrome --version`
  > Google Chrome 45.0.2454.93

* **$>** `git --version`
  > git version 1.9.1

* **$>** `atom --version`
  > 1.0.3

* **$>** `nvm --version`
  > 0.23.3

* **$>** `npm --version`
  > 2.14.3

* **$>** `node --version`
  > v4.0.0



[chrome]: https://www.google.com/chrome/browser/desktop/ ("Chrome Web Browser")
[git]: https://git-scm.com/downloads ("git - a Decentralised Version Control System")
[editor]: https://atom.io/ ("Githubs Atom Editor")
[nvm]: https://github.com/creationix/nvm#install-script ("Node Version Manager (by creationx)")
* **You** should know which [`os`][os] (=operating system) your [`computer`][computer] (e.g. desktop, laptop, ...) runs on.
* **You** should know how to open a [`cli`][cli] (=command line interface) on your `os` (=> [learn here][learnCli])
  * os: e.g. http://www.linuxmint.com/edition.php?id=194 (download Serbia)

## 1. Setup Environment
If you are already partly or fully set up, feel free to skip some or all setup steps.  

[cli]: http://en.wikipedia.org/wiki/Command-line_interface ("Command Line Interface")
[learnCli]: http://learntocodewith.me/command-line/open-command-line/ (:Learn how to use the Command Line Interface on your Operating System")
[os]: http://en.wikipedia.org/wiki/Operating_system#Examples_of_operating_systems ("Operating System")
[enterKey]: http://en.wikipedia.org/wiki/Enter_key ("Learn about the Enter Key")
[keyboard]: http://en.wikipedia.org/wiki/Computer_keyboard ("Learn about Keyboards")
[computer]: http://en.wikipedia.org/wiki/Personal_computer ("Personal Computer")

**If you run into any trouble with the following steps or think they are hard to understand, misleading or otherwise lacking (e.g. typos or broken links), please [`open an issue`][openIssue] and tell us about it. Thank you :-)**

[openIssue]: https://github.com/wizardamigosinstitute/program/issues ("Github Issues")

**Abbreviations:**
* **$>** `commandname` **#means:** *"Open your [`cli`][cli], type "`commandname`" and press the  [`<enter key>`][enterKey] on your [`keyboard`][keyboard]"*


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


### + Configure `Android SDK Tools` (Platform Independent)

#### 1. Manage `AVDs`, `projects` and `installed sdk components`
1. **Run `Android SDK Manager` & Install SDK Packages/ Platform tools:**
* Manage `sdk packages` (e.g. installed platforms, installed system images)
* **$>** `android sdk` # or just `android`  
```bash
[ ] Tools # Tools
    ...
    [x] "Android SDK Tools (Rev. 24.3.3)" or newer
    [x] "Android SDK Platform-Tools (Rev. 22)" or newer
    [x] "Android SDK Build-tools v23.0.1" or newer
    ...
[x] "Android 6.0 (API 23)" or newer
    ...
    [x] "Intel x86 Atom System Image" (and others...)
    ...
[x] Extras -> "Android Support Repository" or newer
    [x] SDK Platform
    ...
```

#### 2. **AVD Manager (GUI to create/configure/manage for Android Virtual Devices (`AVDs`))**
You should create an AVD for each general device configuration
(for example, different screen sizes and platform versions)
with which your application is compatible and test your application on each one.
http://developer.android.com/tools/devices/index.html
For more details [see here](http://developer.android.com/tools/devices/managing-avds.html)
* An `AVD` consists of:
  1. A hardware profile
    * device features
  2. Mapping to System Image
    * defines `Android Version` runnning on the device
  3. Other options
    * emulator skin (screen dimensions/appearance/...)
    * emulated SD card
  4. Dedicated Storage
    * device's user data (installed apps, settings, ...)
    * emulated SD card storage
  5. API Level
    * http://developer.android.com/guide/topics/manifest/uses-sdk-element.html
    * specified in the `minSdkVersion` attribute of the application's `manifest file`
    * application will not be able to run on a system image whose API Level is less than that required by your application
    * http://developer.android.com/tools/publishing/versioning.html
  6. `Uses Library`
    * If your application declares a uses-library element in its manifest file,
      the application can only run on a system image in which that external library is present
1. **Create a new Device Image:** (For more information, [see here](https://developer.android.com/tools/devices/managing-avds-cmdline.html))
  * **$>** `android avd`
    1. Choose any `Device Definitions`
      1. e.g. `Galaxy Nexus` by Google [17. November 2011] (Screen: 4.7", 720x1280, Normal xhdpi; RAM: 1024 MiB) => For Android 4.0.3 (API 15)
      2. e.g. `Nexus 6` by Google [29. Oktober 2014] (Screen: 6", 2560×1440, Normal 560dpi; RAM: 3 MiB) => For Android 5.1.1 (API 22)
    2. Press "Create AVD" and customize*
      1. Nexus 6
        * e.g. **Target:** `Android 5.1.1 - API Level 22`
        * e.g. **CPU/ABI:** `ARM (armeabi-v7a)`
        * e.g. **Skin:** `WVGA800`
        * e.g. **Back Camera:** `Webcam0`
        * e.g. [x] `Use Host GPU`
        * Press "OK"
      2. Google Nexus
        * e.g. **Target:** `Android 4.0.3 - API Level 15`
        * e.g. **CPU/ABI:** `ARM (armeabi-v7a)`
        * e.g. **Skin:** `WVGA800`
        * e.g. **Back Camera:** `Webcam0`
        * e.g. [x] `Use Host GPU`
        * Press "OK"
    3. Close the Tool
2. **check success:**
  * **$>** `android list avd`
  ```
  Available Android Virtual Devices:
      Name: AVD_for_Galaxy_Nexus_by_Google
    Device: Galaxy Nexus (Google)
      Path: /usr/local/android-sdk-linux/.android/avd/AVD_for_Galaxy_Nexus_by_Google.avd
    Target: Android 4.0.3 (API level 15)
   Tag/ABI: default/armeabi-v7a
      Skin: WVGA800
  ---------
      Name: AVD_for_Nexus_6_by_Google
    Device: Nexus 6 (Google)
      Path: /usr/local/android-sdk-linux/.android/avd/AVD_for_Nexus_6_by_Google.avd
    Target: Android 5.1.1 (API level 22)
   Tag/ABI: default/armeabi-v7a
      Skin: WVGA800
  ```
