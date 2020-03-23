import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyA3qay41gIGWfzkHJAhw4SY_gZHI4qEdRA',
  authDomain: 'vamosajudar-flatcode.firebaseapp.com',
  databaseURL: 'https://vamosajudar-flatcode.firebaseio.com',
  projectId: 'vamosajudar-flatcode',
  storageBucket: 'vamosajudar-flatcode.appspot.com',
  messagingSenderId: '274517677277',
  appId: '1:274517677277:web:c21ef00f68d48d0f317734',
  measurementId: 'G-TDYRL68X3E',
}

firebase.initializeApp(firebaseConfig)
firebase.analytics()

const dataRef = firebase.database().ref()
export const contributors = dataRef.child('contributors')
