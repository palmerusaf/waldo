import {
  assertFails,
  assertSucceeds,
  initializeTestEnvironment,
  RulesTestEnvironment,
} from "@firebase/rules-unit-testing";
import { getDocs } from "firebase/firestore";
import { collection } from "firebase/firestore/lite";
const fs = require("fs");

const firebase = require("@firebase/rules-unit-testing");
const MY_PROJECT_ID = "waldo-7d581";

describe("playerLocations Tests", () => {
  it("can read items in read-only collection", async () => {
    const testEnv = await initializeTestEnvironment({
      projectId: "waldo-7d581",
      firestore: {
        host: "localhost",
        port: "8080",
        rules: fs.readFileSync("firestore.rules", "utf8"),
      },
    });
    const anon = testEnv.unauthenticatedContext();
    const playerLocations = collection(anon, "playerLocations");
    await assertSucceeds(getDocs(anon.firestore(), playerLocations));
  });
});
