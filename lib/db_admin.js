import admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      private_key: process.env.FIREBASE_PRIVATE_KEY,
      project_id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    }),
    databaseURL: "https://realtimeviews-53eb2-default-rtdb.firebaseio.com/",
  });
}

export default admin.database();

// // const admin = require("firebase-admin");
// // const firebasePrivateKey = process.env.FIREBASE_PRIVATE_KEY;

// // try {
// //   admin.initializeApp({
// //     credential: admin.credential.cert({
// //       client_email: process.env.FIREBASE_CLIENT_EMAIL,
// //       privateKey: firebasePrivateKey.replace(/\\n/g, "\n"),
// //       project_id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
// //     }),
// //     databaseURL: "https://ibaslogic-website-default-rtdb.firebaseio.com/",
// //   });
// // } catch (error) {
// //   /*
// //    * We skip the "already exists" message which is
// //    * not an actual error when we're hot-reloading
// //    */
// //   if (!/already exists/u.test(error.message)) {
// //     // eslint-disable-next-line no-console
// //     console.error("Firebase admin initialization error", error.stack);
// //   }
// // }

// // module.exports = admin.database();

// import admin from "firebase-admin";

// const firebasePrivateKey = process.env.FIREBASE_PRIVATE_KEY;

// if (!admin.apps.length) {
//   admin.initializeApp({
//     credential: admin.credential.cert({
//       client_email: process.env.FIREBASE_CLIENT_EMAIL,
//       private_key: firebasePrivateKey.replace(/\\n/g, "\n"),
//       project_id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     }),
//     databaseURL: "https://ibaslogic-website-default-rtdb.firebaseio.com/",
//   });
// }

// export default admin.database();

// // // import admin from "firebase-admin";

// // // const {
// // //   FIREBASE_CLIENT_EMAIL,
// // //   FIREBASE_PRIVATE_KEY,
// // //   NEXT_PUBLIC_FIREBASE_PROJECT_ID,
// // // } = process.env;

// // // // const firebasePrivateKey = FIREBASE_PRIVATE_KEY;

// // // if (!admin.apps.length) {
// // //   admin.initializeApp({
// // //     credential: admin.credential.cert({
// // //       client_email: process.envFIREBASE_CLIENT_EMAIL,
// // //       // private_key:
// // //       //   FIREBASE_PRIVATE_KEY[0] === "-"
// // //       //     ? FIREBASE_PRIVATE_KEY
// // //       //     : JSON.parse(FIREBASE_PRIVATE_KEY),
// // //       // private_key: firebasePrivateKey.replace(/\\n/g, "\n"),
// // //       private_key: process.envFIREBASE_PRIVATE_KEY,
// // //       project_id: process.envNEXT_PUBLIC_FIREBASE_PROJECT_ID,
// // //     }),
// // //     databaseURL: "https://ibaslogic-website-default-rtdb.firebaseio.com/",
// // //   });
// // // }

// // // export default admin.database();
