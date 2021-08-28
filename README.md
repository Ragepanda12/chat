## Chat app written using React and Firebase.

To run this, you'll need to create an .env file in the root of this project with this format using the config files from firebase which you can generate here: https://firebase.google.com/docs/web/learn-more#config-object

```
REACT_APP_API_KEY=*************
REACT_APP_AUTH_DOMAIN=*************
REACT_APP_PROJECT_ID=*************
REACT_APP_STORAGE_BUCKET=*************
REACT_APP_MESSAGING_SENDER_ID=*************
REACT_APP_APP_ID=*************
REACT_APP_MEASUREMENT_ID=*************
```

This was mostly made using the guide here: https://www.youtube.com/watch?v=zQyrwxMPm88 although it seem that the guide is using firebase 8 which has quite a different API to the latest version.

I've replaced the logic of getting and settting to and from the firestore with more modern APIs.
