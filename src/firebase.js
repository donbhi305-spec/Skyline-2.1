import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { getDatabase, ref, get, set, update, push, onValue, remove } from 'firebase/database';
import { getStorage } from 'firebase/storage';

const firebaseConfig={apiKey:'AIzaSyBfeoxdsxG8kD1_r41D44ktfQ6Fj0Q9U0g',authDomain:'veltrixa-55dd3.firebaseapp.com',databaseURL:'https://veltrixa-55dd3-default-rtdb.asia-southeast1.firebasedatabase.app',projectId:'veltrixa-55dd3',storageBucket:'veltrixa-55dd3.firebasestorage.app',appId:'1:20010041783:android:010b3ec77e6ae9d6b0e832'};
const app=initializeApp(firebaseConfig); export const auth=getAuth(app); export const db=getDatabase(app); export const storage=getStorage(app); export const googleProvider=new GoogleAuthProvider();
export {signInWithPopup,signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut,ref,get,set,update,push,onValue,remove};
