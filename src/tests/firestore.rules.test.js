/**
 * @jest-environment node
 */
import {
  assertFails,
  assertSucceeds,
  initializeTestEnvironment,
  RulesTestEnvironment,
} from "@firebase/rules-unit-testing";
import { collection, getDocs, addDoc } from "firebase/firestore";
const fs = require("fs");

const MY_PROJECT_ID = "waldo-7d581";

const getTestEnv = async () =>
  initializeTestEnvironment({
    projectId: "waldo-7d581",
    firestore: {
      host: "localhost",
      port: "8080",
      rules: fs.readFileSync("firestore.rules", "utf8"),
    },
  });

const getFirestore = async () => {
  const testEnv = await getTestEnv();
  return testEnv.unauthenticatedContext().firestore();
};

const getApp = async () => {
  const testEnv = await getTestEnv();
  return testEnv.unauthenticatedContext();
};

const getRankings = async (db) => {
  const rankingsCollection = collection(db, "rankings");
  const rankingsSnapshot = await getDocs(rankingsCollection);
  const rankingsList = rankingsSnapshot.docs.map((doc) => doc.data());
  return rankingsList;
};

const addRanking = async ({ name, time }, db) => {
  try {
    const rankingsCollection = collection(db, "rankings");
    const docRef = await addDoc(rankingsCollection, { name, time });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const getCharacterLocations = async (db) => {
  const characterLocationsCollection = collection(db, "characterLocations");
  const characterLocationsSnapshot = await getDocs(
    characterLocationsCollection
  );
  const characterLocationsList = characterLocationsSnapshot.docs.map((doc) =>
    doc.data()
  );
  return characterLocationsList;
};

describe("characterLocations Tests", () => {
  it("can read items in read-only collection", async () => {
    const db = await getFirestore();
    await assertSucceeds(getCharacterLocations(db));
  });
});
