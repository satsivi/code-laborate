import firebase from 'firebase'
import {secret} from './secret.json'
const firebaseui = require('firebaseui')

const config = secret
const fire = firebase.initializeApp(config)

export default fire
