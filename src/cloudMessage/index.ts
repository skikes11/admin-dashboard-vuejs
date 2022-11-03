import { initializeApp } from 'firebase/app'
import { getMessaging, getToken } from 'firebase/messaging'

const firebaseConfig = {
  apiKey: 'AIzaSyAAc9ZslvvDsYOp6SszSGxaO-mroPsnJR8',
  authDomain: 'notificationapp-c7fdd.firebaseapp.com',
  projectId: 'notificationapp-c7fdd',
  storageBucket: 'notificationapp-c7fdd.appspot.com',
  messagingSenderId: '1070839508499',
  appId: '1:1070839508499:web:577f53fa1fc3027dc099e6',
  measurementId: 'G-T65CT2E5E0',
}

function requestPermission() {
  console.log('Requesting permission...')
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.')
      const app = initializeApp(firebaseConfig)

      const messaging = getMessaging(app)

      getToken(messaging, {
        vapidKey:
          'BNXgyytRQV4QfQTsEZXKOapyjr-kLRgL1PM6bjK4ArEFJcCLNHTDNtn-W-tg8JOgJlZSOHM6zwE_cI3rrNEy9dA',
      })
        .then((currentToken) => {
          if (currentToken) {
            console.log('currentToken: ', currentToken)
          } else {
            console.log('Can not get token')
          }
        })
        .then((err) => {
          console.log(err)
        })
    } else {
      console.log('Do not have permission!')
    }
  })
}

requestPermission()
