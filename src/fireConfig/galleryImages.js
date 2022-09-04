import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import {doc,collection} from 'firebase/firestore'
import { storage } from "./firebaseInit";

export const uploadFileWithProgress = (file, folderPath, imgName, setProgress) => {
    console.log("INUP")
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
// export const addGalleryDoc = ((cateName, imgDataSingle) => {
// })