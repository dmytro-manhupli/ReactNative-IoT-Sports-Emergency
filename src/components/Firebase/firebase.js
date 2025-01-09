import * as firebase from 'firebase'

// Initialize Firebase
const firebaseConfig = {
  apiKey: '',
  authDomain: 'project-4-c79e1.firebaseapp.com',
  databaseURL: 'https://project-4-c79e1.firebaseio.com',
  projectId: 'project-4-c79e1',
  storageBucket: 'project-4-c79e1.appspot.com',
  messagingSenderId: '437402668990'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
export default firebaseApp
