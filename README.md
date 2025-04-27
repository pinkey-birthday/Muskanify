here you have the qr as well as the apk
you can directly use the apk or the qr to scan and download apk in phone
or you can get the apk from android\app\build\outputs\apk\debug
when making any changes in code do this
npm run build
npx cap sync OR npx cap sync android

# Navigate to the android directory
cd android

# Assemble the debug APK
./gradlew assembleDebug

# Return to the project root directory
cd ..

then go to 
android\app\build\outputs\apk\debug
to get the apk file

