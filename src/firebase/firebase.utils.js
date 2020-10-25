import firebase from 'firebase/app'

import 'firebase/firestore'

import 'firebase/auth'



const config = {
    apiKey: "AIzaSyDTry9eH4zuzAYmS2Wmx1I8cdSY_DRPSZU",
    authDomain: "projet-vente-78cad.firebaseapp.com",
    databaseURL: "https://projet-vente-78cad.firebaseio.com",
    projectId: "projet-vente-78cad",
    storageBucket: "projet-vente-78cad.appspot.com",
    messagingSenderId: "682430052655",
    appId: "1:682430052655:web:2892a7754baa3e77db09da",
    measurementId: "G-Q5MC6G7TDB"
  }; 

  firebase.initializeApp(config)



export const auth = firebase.auth()

export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({ prompt: 'select_account' })

export const loginAvecGoogle = () => auth.signInWithPopup(provider)



export default firebase