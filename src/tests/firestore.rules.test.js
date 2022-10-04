/**
 * @jest-environment node
 */
import {
  assertFails,
  assertSucceeds,
  initializeTestEnvironment,
  RulesTestEnvironment,
} from "@firebase/rules-unit-testing";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

const fs = require("fs");

const MY_PROJECT_ID = "waldo-7d581";

const getTestEnv = async () =>
  initializeTestEnvironment({
    projectId: MY_PROJECT_ID,
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

const addTestLocation = async (testEnv) => {
  const db = testEnv.unauthenticatedContext().firestore();
  const locationsCol = collection(db, "characterLocations");
  const location = { name: "waldo", minX: 20, maxX: 30, minY: 20, maxY: 30 };
  //write test doc
  const docId = await testEnv.withSecurityRulesDisabled(
    addDoc(locationsCol, location)
  );
  return docId;
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
  it("can read in list mode", async () => {
    const db = await getFirestore();

    await assertSucceeds(getCharacterLocations(db));
  });

  it("cannot read single docs", async () => {
    const testEnv = await getTestEnv();
    const db = testEnv.unauthenticatedContext().firestore();
    const docId = await addTestLocation(testEnv);

    await assertFails(db.collection("characterLocations").doc(docId).get());
  });

  it("cannot delete single docs", async () => {
    const testEnv = await getTestEnv();
    const db = testEnv.unauthenticatedContext().firestore();
    const docId = await addTestLocation(testEnv);

    await assertFails(db.collection("characterLocations").doc(docId).delete);
  });

  it("cannot delete collection", async () => {
    const testEnv = await getTestEnv();
    const db = testEnv.unauthenticatedContext().firestore();
    const docId = await addTestLocation(testEnv);

    await assertFails(deleteDoc(doc(db, "characterLocations")));
  });

  it("cannot update docs", async () => {
    const testEnv = await getTestEnv();
    const docId = await addTestLocation(testEnv);

    await assertFails(updateDoc(docId, { name: "odlaw" }));
  });
});
