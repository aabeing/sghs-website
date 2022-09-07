import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { arrayRemove, arrayUnion, doc, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore'
import { db, storage } from "./firebaseInit";

export const uploadFileWithProgress = (file, folderPath, imgName, setProgress) => {
    // console.log("INUP")
    return new Promise((resolve, reject) => {
        const storageRef = ref(storage, folderPath + '/' + imgName);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on('state_changed', (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            setProgress(Math.round(progress));
        }, (err) => {
            reject(err);
        }, async () => {
            try {
                const url = getDownloadURL(uploadTask.snapshot.ref);
                resolve(url)
            }
            catch (err) {
                reject(err);
            }
        })
    });
}
export const addGalleryDoc = ((cateId, newImgData) => {
    const docRef = doc(db, 'gallery', cateId);
    return setDoc(docRef, {
        imgData: arrayUnion(newImgData),
        timestamp: serverTimestamp(),
    },
        { merge: true });
});


export const deleteFileStorage = (filePath) => {
    const imgRef = ref(storage, filePath)
    return deleteObject(imgRef);
}
export const deleteImgDoc = (cateId, curImgData)=>{
    const docRef = doc(db, 'gallery', cateId);
    return updateDoc(docRef, {
        imgData: arrayRemove(curImgData),
    });
}
