import firebase from 'firebase'
import {secret} from './secret.json'

const config = secret
const fire = firebase.initializeApp(config)

export default fire
