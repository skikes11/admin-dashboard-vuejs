importScripts('https://www.gstatic.com/firebasejs/8.2.7/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.2.7/firebase-messaging.js')

const firebaseConfig = {
  apiKey: 'AIzaSyAyxey9rtEp7mbbXQGUhI6d3eUVVIG5EkE',
  authDomain: 'notification-message-95e93.firebaseapp.com',
  projectId: 'notification-message-95e93',
  storageBucket: 'notification-message-95e93.appspot.com',
  messagingSenderId: '802696826247',
  appId: '1:802696826247:web:e9c858d2deaf28fde05722',
  measurementId: 'G-ZG13RP87JK',
}

const app = firebase.initializeApp(firebaseConfig)

app
  .messaging()
  .getToken({
    vapidKey:
      'BD6DyV49vaKotpzA37YTyy-eyo0AjOjp-QTW7Nm6W1GhM-gK4ltttcXu8dGo12-Y9AfTtpLFWuUTrtwCizcJF88',
  })
  .then((currentToken) => {
    if (currentToken) {
      console.log('client token', currentToken)
    } else {
      console.log('No registration token available. Request permission to generate one.')
    }
  })
  .catch((err) => {
    console.log('An error occurred while retrieving token. ', err)
  })
