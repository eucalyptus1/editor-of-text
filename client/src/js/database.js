import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log("no error cause everythings fine");
  const jateDB = await openDB("jate", 1);
  const jx = jateDB.transaction("jate", "readwrite");
  const store = jx.objectStore("jate");
  const request = store.add({ jate: content });
  const result = await request;
  console.log("saved to db!", result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log("it WORKS");
  const jateDb = await openDB("jate", 1);
  const jx = jateDb.transaction("jate", "readonly");
  const store = jx.objectStore("jate");
  const request = store.getAll();
  const result = await request;
  console.log("result.value", result);
  return result;
};

initdb();
