import { getStorage, ref, getDownloadURL } from "firebase/storage";

// Create a reference to the file we want to download
const storage = getStorage();

// export const dwldImg = (path) => {
//     const starsRef = ref(storage, path);

//     // Get the download URL
//     getDownloadURL(starsRef)
//         .then((url) => {
//             // Insert url into an <img> tag to "download"
//             return url
//         })
//         .catch((error) => {
//             // A full list of error codes is available at
//             // https://firebase.google.com/docs/storage/web/handle-errors

//             switch (error.code) {
//                 case 'storage/object-not-found':
//                     throw "File doesn't exist"
//                     break;
//                 case 'storage/unauthorized':
//                     throw "User doesn't have permission to access the object"
//                     break;
//                 case 'storage/canceled':
//                     throw "User canceled the upload"
//                     break;

//                 // ...

//                 case 'storage/unknown':
//                     throw "Unknown error occurred, inspect the server response"
//                     break;
//             }
//         });
// }