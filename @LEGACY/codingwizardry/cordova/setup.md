## Supply devices
1. Configure Emulators (AVD's)
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

2. **Turn on USB debugging on your device.**
* (see [Hardware Device](http://developer.android.com/tools/device.html))
  * Enable USB debugging on real devices.
    > To access these settings, open the Developer options in the system settings. On Android 4.2 and higher, the Developer options screen is hidden by default. To make it visible, go to Settings > About phone and tap Build number seven times. Return to the previous screen to find Developer options at the bottom.

  * And on phone: `Settings > About Phone > "tap build number 7 times"`
    * And then: `Settings > Applications > Development`
  * And on phone: `Settings > Developer options > turn on USB debugging`
  * Windows:
    * Install [OEM USB Drivers](http://developer.android.com/tools/extras/oem-usb.html) on Windows
  * Mac OSX: all is just fine
  * Linux:
    * If you're developing on Ubuntu Linux, you need to add a udev rules file that contains a USB configuration for each type of device you want to use for development. In the rules file, each device manufacturer is identified by a unique vendor ID, as specified by the `ATTR{idVendor}` property. For a list of vendor IDs, see http://developer.android.com/tools/device.html#VendorIds
    * To set up device detection on Ubuntu Linux:
      * Log in as root and create this file: `/etc/udev/rules.d/51-android.rules`
      * Use this format to add each vendor to the file:
        * `SUBSYSTEM=="usb", ATTR{idVendor}=="0bb4", MODE="0666", GROUP="plugdev"`
          * In this example, the `vendor ID` is for HTC.
          * The `MODE` assignment specifies read/write permissions
          * and `GROUP` defines which Unix group owns the device node.
        > **Note:** The rule syntax may vary slightly depending on your environment.
          Consult the udev documentation for your system as needed.
          For an overview of rule syntax, see this guide to writing udev rules.
          http://www.reactivated.net/writing_udev_rules.html
      * Now execute: `chmod a+r /etc/udev/rules.d/51-android.rules`
      > Note: When you connect a device running Android 4.2.2 or higher to your computer, the system shows a dialog asking whether to accept an RSA key that allows debugging through this computer. This security mechanism protects user devices because it ensures that USB debugging and other adb commands cannot be executed unless you're able to unlock the device and acknowledge the dialog. This requires that you have adb version 1.0.31 (available with SDK Platform-tools r16.0.1 and higher) in order to debug on a device running Android 4.2.2 or higher.
