import { initializeApp } from 'firebase/app'
import { getMessaging, getToken, onMessage } from 'firebase/messaging'

const firebaseConfig = {
  apiKey: 'AIzaSyAyxey9rtEp7mbbXQGUhI6d3eUVVIG5EkE',
  authDomain: 'notification-message-95e93.firebaseapp.com',
  projectId: 'notification-message-95e93',
  storageBucket: 'notification-message-95e93.appspot.com',
  messagingSenderId: '802696826247',
  appId: '1:802696826247:web:e9c858d2deaf28fde05722',
  measurementId: 'G-ZG13RP87JK',
}

const app = initializeApp(firebaseConfig)

const messaging = getMessaging(app)

getToken(messaging, {
  vapidKey:
    'BD6DyV49vaKotpzA37YTyy-eyo0AjOjp-QTW7Nm6W1GhM-gK4ltttcXu8dGo12-Y9AfTtpLFWuUTrtwCizcJF88',
})
  .then((currentToken) => {
    if (currentToken) {
      console.log('currentToken: ', currentToken)
    } else {
      console.log('Can not get token')
    }
  })
  .catch((err) => {
    console.log(err)
  })

export default messaging

// function requestPermission() {
//   console.log('Requesting permission...')
//   Notification.requestPermission().then((permission) => {
//     if (permission === 'granted') {
//       console.log('Notification permission granted.')
//       const app = initializeApp(firebaseConfig)

//       const messaging = getMessaging(app)

//       onMessage(messaging, (payload) => {
//         console.log('Message received. ', payload)
//       })

//       getToken(messaging, {
//         vapidKey:
//           'BD6DyV49vaKotpzA37YTyy-eyo0AjOjp-QTW7Nm6W1GhM-gK4ltttcXu8dGo12-Y9AfTtpLFWuUTrtwCizcJF88',
//       })
//         .then((currentToken) => {
//           if (currentToken) {
//             console.log('currentToken: ', currentToken)
//           } else {
//             console.log('Can not get token')
//           }
//         })
//         .catch((err) => {
//           console.log(err)
//         })
//     } else {
//       console.log('Do not have permission!')
//     }
//   })
// }

// requestPermission()
