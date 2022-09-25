import { addDoc, collection, doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { db } from "./firebaseInit";

const addFireDoc = ((colName, docData) => {
    // const colRef = collection(db, "Announcements")
    // console.log({...docData,expiryDate:''})
    // return addDoc(collection(db, colRef), {...docData,expiryDate:''});
    return addDoc(collection(db, colName), { ...docData, timestamp: serverTimestamp() });

});

export const mergeKnownDocEle = ((collectId, docId, newMergeData) => {
    const docRef = doc(db, collectId, docId);
    return setDoc(docRef, {
        ...newMergeData,
        timestamp: serverTimestamp(),
    },
        { merge: true });
});
export default addFireDoc;