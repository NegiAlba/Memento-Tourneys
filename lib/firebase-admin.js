import admin from 'firebase-admin';
const serviceAccount = require("./memento-secret.json");
const adminConfig = {
    credential: admin.credential.cert(serviceAccount)
}
if (!admin.apps.length) {
  admin.initializeApp(adminConfig);
  console.log('Admin done');
}

export default admin.firestore();