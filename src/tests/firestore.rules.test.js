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
  await initializeTestEnvironment({
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

const addTestData = async ({ testEnv, collectionName, testData }) => {
  let docId;
  await testEnv.withSecurityRulesDisabled(async (e) => {
    const db = await e.firestore();
    const dbCollection = collection(db, collectionName);
    docId = await (await addDoc(dbCollection, testData)).id;
  });
  return docId;
};

const addTestLocation = async (testEnv) =>
  await addTestData({
    testEnv,
    collectionName: "characterLocations",
    testData: { name: "waldo", minX: 20, maxX: 30, minY: 20, maxY: 30 },
  });

const addTestRankings = async (testEnv) =>
  await addTestData({
    testEnv,
    collectionName: "rankings",
    testData: { name: "branden", time: 40 },
  });

const getRankings = async (db) => {
  const rankingsCollection = collection(db, "rankings");
  const rankingsSnapshot = await getDocs(rankingsCollection);
  const rankingsList = rankingsSnapshot.docs.map((doc) => doc.data());
  return rankingsList;
};

const addRanking = async ({ name, time }, db) => {
  const rankingsCollection = collection(db, "rankings");
  const docRef = await addDoc(rankingsCollection, { name, time });
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

afterAll(async () => {
  (await getTestEnv()).cleanup();
  (await getTestEnv()).clearFirestore();
});

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

  it("cannot create docs", async () => {
    const db = await getFirestore();

    await assertFails(
      db.collection("characterLocations").add({ bar: "foo", foo: "bar" })
    );
  });

  it("cannot delete single docs", async () => {
    const testEnv = await getTestEnv();
    const db = testEnv.unauthenticatedContext().firestore();
    const docId = await addTestLocation(testEnv);
    const doc = db.collection("characterLocations").doc(docId);

    await assertFails(doc.delete());
  });

  it("cannot update docs", async () => {
    const testEnv = await getTestEnv();
    const db = testEnv.unauthenticatedContext().firestore();
    const docId = await addTestLocation(testEnv);
    const doc = db.collection("characterLocations").doc(docId);

    await assertFails(doc.update({ name: "odlaw" }));
  });
});

describe("basic rankings Tests", () => {
  it("can read in list mode", async () => {
    const testEnv = await getTestEnv();
    const db = testEnv.unauthenticatedContext().firestore();

    await assertSucceeds(getRankings(db));
  });

  it("can create docs", async () => {
    const testEnv = await getTestEnv();
    const db = testEnv.unauthenticatedContext().firestore();

    await assertSucceeds(addRanking({ name: "matt", time: 40 }, db));
  });

  it("cannot read single docs", async () => {
    const testEnv = await getTestEnv();
    const db = testEnv.unauthenticatedContext().firestore();
    const docId = await addTestRankings(testEnv);

    await assertFails(db.collection("rankings").doc(docId).get());
  });

  it("cannot delete single docs", async () => {
    const testEnv = await getTestEnv();
    const db = testEnv.unauthenticatedContext().firestore();
    const docId = await addTestRankings(testEnv);
    const doc = db.collection("rankings").doc(docId);

    await assertFails(doc.delete());
  });

  it("cannot update docs", async () => {
    const testEnv = await getTestEnv();
    const db = testEnv.unauthenticatedContext().firestore();
    const docId = await addTestRankings(testEnv);
    const doc = db.collection("rankings").doc(docId);

    await assertFails(doc.update({ name: "odlaw" }));
  });
});

describe("create rankings Tests", () => {
  it("time must be greater than 0", async () => {
    const db = await getFirestore();

    await assertSucceeds(addRanking({ name: "matt", time: 20 }, db));
    await assertFails(addRanking({ name: "matt", time: 0 }, db));
    await assertFails(addRanking({ name: "matt", time: -1 }, db));
  });
  it("cannot create if name blank", async () => {
    const db = await getFirestore();

    await assertFails(addRanking({ name: "", time: 40 }, db));
  });
  it("cannot create if name has space", async () => {
    const db = await getFirestore();

    await assertFails(addRanking({ name: " matt", time: 40 }, db));
    await assertFails(addRanking({ name: " m att", time: 40 }, db));
  });
  it.skip("cannot create if name has cursing", async () => {
    const testEnv = await getTestEnv();
    const db = testEnv.unauthenticatedContext().firestore();

    await assertFails(addRanking({ name: "ass", time: 40 }, db));
    await assertFails(addRanking({ name: "asshole", time: 40 }, db));
  });
  it("cannot create if name has >20 chars", async () => {
    const db = await getFirestore();

    await assertFails(
      addRanking({ name: "maaaaaaaaaaaaaaaaaaaaaatt", time: 40 }, db)
    );
  });
  it("cannot create if name is other than letters", async () => {
    const db = await getFirestore();

    await assertFails(addRanking({ name: "1matt", time: 40 }, db));
    await assertFails(addRanking({ name: "1m*att", time: 40 }, db));
  });
  it("only create with valid fields", async () => {
    const db = await getFirestore();

    // await assertFails(addRanking({ name: "matt" }, db));
    await assertFails(
      db.collection("rankings").add({ name: "matt", time: 39, invalid: "bar" })
    );
  });
});
