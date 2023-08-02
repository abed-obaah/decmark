import firebase from 'firebase';

const config ={
  apiKey: "AIzaSyDtchQ4oiXtnMgUj270oA_P_kAduMLfazU",
  authDomain: "fir-cloud-messaging-96ed1.firebaseapp.com",
  projectId: "fir-cloud-messaging-96ed1",
  storageBucket: "fir-cloud-messaging-96ed1.appspot.com",
  messagingSenderId: "534985603460",
  appId: "1:534985603460:web:18710f643010bd4ec545d1"
}

firebase.initializeApp(config)

export default firebase