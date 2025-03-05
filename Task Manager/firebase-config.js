import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore, collection } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDWXg8KOUub5LnqtN3nu69py-nRZT5z42s",
  authDomain: "task-manager-546ad.firebaseapp.com",
  projectId: "task-manager-546ad",
  storageBucket: "task-manager-546ad.firebasestorage.app",
  messagingSenderId: "368500262463",
  appId: "1:368500262463:web:f96e8f6f2950c6d0705a8a",
  measurementId: "G-WDHYKYJRW6"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const tasksCollection = collection(db, "tasks");
