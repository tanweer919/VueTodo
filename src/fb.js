import firebase from 'firebase/app';
import 'firebase/firestore'

var config = {}; //Your firebase config here
firebase.initializeApp(config);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });
export default db;