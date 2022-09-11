import { collection, doc, onSnapshot, orderBy, query, deleteDoc, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from './firebaseInit';
export const useFireDocs = (collectionName) => {

    const [documents, setDocuments] = useState([]);
    useEffect(() => {
        let q;
        if(collectionName === 'Announcements'){
            const today = new Date()
            q = query(
                collection(db, collectionName),
                orderBy("expiryDate",'desc'),
                where("expiryDate", ">=", today),
                orderBy('timestamp', 'desc'),                
            );
        }
        else{
            q = query(
                collection(db, collectionName),
                orderBy('timestamp', 'desc')
            );
        }
        const unsubscribe = onSnapshot(
            q,
            (snapshot) => {
                const docs = [];
                snapshot.forEach((doc) => {
                    docs.push({ id: doc.id, data: doc.data() });
                });
                setDocuments(docs);
            },
            (error) => {
                alert(error.message);
                console.log(error);
            }
        );
        return () => unsubscribe();
    }, [collectionName]);

    return [...documents];
};

export const useFireDoc = (collectionName, docName) => {
    const [document, setDocument] = useState();
    useEffect(() => {
        const q = query(
            doc(db, collectionName, docName),
            //   orderBy('timestamp', 'desc')
        );
        const unsubscribe = onSnapshot(
            q,
            (doc) => {
                setDocument(doc.data());

            },
            (error) => {
                alert(error.message);
                console.log(error);
            }
        );
        return () => unsubscribe();
    }, [collectionName, docName]);
    // console.log("IN: ",document)
    return { ...document };
};

export const deleteDocFromDb = (collectName, docId) => {
    return deleteDoc(doc(db, collectName, docId));
}

