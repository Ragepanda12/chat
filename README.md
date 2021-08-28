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

You'll also need to set up firestore https://firebase.google.com/docs/firestore/quickstart with a collection called "Messages". The format of a Message doc is
```
{
  message: "your message text",
  createdAt: 123412513513,
  uid: "Your google user id",
  photoURL: "https://your-photo-url-here.com"
}
```
If you want to host this yourself, check out this guide I used which explains how you can use Firebase to host for free: https://javascript.plainenglish.io/hosting-your-react-js-and-node-js-apps-for-free-with-firebase-6dc670564aca

This was mostly made using the guide here: https://www.youtube.com/watch?v=zQyrwxMPm88 although it seem that the guide is using firebase 8 which has quite a different API to the latest version.

I've replaced the logic of getting and settting to and from the firestore with more modern APIs.

And as is usual with any npm based apps:
```
npm install
npm start
```
