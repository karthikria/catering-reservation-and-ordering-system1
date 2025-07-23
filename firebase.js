const admin = require("firebase-admin");
const serviceAccount = require("./cateringsystem-44ceb-firebase-adminsdk-fbsvc-d267aed225.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
module.exports = admin;

