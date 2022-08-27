import fireApp from "../dbConfig/firebaseInit";
import {collection, getFirestore, limit,orderBy,onSnapshot,query} from "firebase/firestore"

// const fireDB = {};
const db = getFirestore(fireApp);
// fireDB.getFireDocs = async (cName) => {
//     // const db = getFirestore(fireApp);
//     const querySnapshot = await getDocs(collection(db, cName));
//     return querySnapshot;
//     // querySnapshot.forEach((doc) => {
//     //   // doc.data() is never undefined for query doc snapshots
//     //   console.log(doc.id, " => ", doc.data());
//     // })
// };

export const getFireDocsRT = async (cName,runAfterFetch) => {
    // const q = query(collection(db, cName),orderBy('DateInfo'),limit(5));
    const q = query(collection(db, cName));
    const unsubscribe = onSnapshot(q, runAfterFetch);
    return unsubscribe;
}
// export default fireDB;

