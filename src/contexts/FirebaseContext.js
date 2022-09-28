import React, { useContext } from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore/lite";

const FirebaseContext = React.createContext();

export const useFirebaseContext = () => useContext(FirebaseContext);

const firebaseConfig = {
  apiKey: "AIzaSyCXz141XcA-4PbdZi0q8YXDpLwSxK1UQug",
  authDomain: "waldo-7d581.firebaseapp.com",
  projectId: "waldo-7d581",
  storageBucket: "waldo-7d581.appspot.com",
  messagingSenderId: "34874304663",
  appId: "1:34874304663:web:99c627b7a87305a97ca1d2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export function FirebaseProvider({ children }) {
  const rankingsCollection = collection(db, "rankings");

  const getRankings = async () => {
    const rankingsSnapshot = await getDocs(rankingsCollection);
    const rankingsList = rankingsSnapshot.docs.map((doc) => doc.data());
    return rankingsList;
  };

  const addRanking = async ({ name, time }) => {
    try {
      const docRef = await addDoc(rankingsCollection, { name, time });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    return (
      <FirebaseContext.Provider value={{ getRankings, addRanking }}>
        {children}
      </FirebaseContext.Provider>
    );
  };
}