# Orbital-2021-ProductivityPets

By Kevin Foong and Zachary Chua

## About:

Front-end of Productivity Pets Mobile App.

![App Todo Page Screenshot]

A minimalist todo list and pet simulator.
Stay focused on accomplishing your life goals alongside your very own pet friend!

## Features:

Evolve your pet.
Unlock rewards.
etc.

## Setting up on your local device

### 1. Install Expo-CLI.

> `yarn global add expo-cli`

### 2. Run the development server.

> `yarn start`

to start Metro Bundler at port 19002 (http://localhost:19002)

### 3a. Run in web browser

Click "Run in Web Browser" in Metro Bundler and the web version will start at port 19006

### 3b. Run in Android Emulator

#### 1. Install Android Studio

Select Standard install in the installer.

#### 2. Install Android SDK

Once installed, click on `configure` and `SDK Manager` on the bottom right hand corner.
Under `SDK Platforms`, ensure that Android 11 (latest one i think) is installed.
Under `SDK Tools`, ensure `Android SDK Build Tools`, `Android Emulator`, and `Android Platform Tools` are selected. Tutorial also mentioned to ensure that `Intel x86 Emulator Accelerator` is selected, however that option was not available for me.

#### 3. For MacOS and Linux Systems.

Follow the instructions on Expo-CLI documentation, under Android Emulator, to add paths to the Android SDK in your `.bash_profile` or `.zshrc`

FOR MACOS: add path to platform tools in `.zshrc` as well.

Ensure that you can run `adb` from the terminal.

### 4. Create the Android Virtual Device (AVD)

Click on `configure` > `AVD Manager` > `Create New Virtual Device`. I chose Pixel 4 with Android 11.

### 5. Run app on the AVD

Click the "play" button on next to the virtual device to run the AVD.
While the AVD is running, go back to Metro Bundler and click on "Run on Android device/ emulator" and it should run automatically in the AVD.
