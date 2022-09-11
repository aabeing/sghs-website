import {  addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from "./firebaseInit";

const addFireDoc = ((colName,docData) => {
    // const colRef = collection(db, "Announcements")
    // console.log({...docData,expiryDate:''})
    // return addDoc(collection(db, colRef), {...docData,expiryDate:''});
    return addDoc(collection(db, colName), {...docData,timestamp: serverTimestamp()});
      
});
export default addFireDoc;