const functions = require('firebase-functions')
const admin = require('firebase-admin')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
admin.initializeApp({
        credential: admin.credential.cert(require('./key.json'))
    })
    // admin.initializeApp({
    //     credential: admin.credential.cert(require('./key.json')),
    //     databaseURL: "mathq-bfb87.firebaseapp.com"
    // })
const db = admin.firestore()


exports.helloWorld = functions.https.onRequest((request, response) => {
        response.send("Hello from Firebase!")
    })
    // exports.test = functions.https.onRequest(require('./test'))
exports.admin = functions.https.onRequest(require('./admin'))

exports.createUser = functions.auth.user().onCreate(async(user) => {
    const { uid, email, displayName, emailVerified, photoURL, disabled } = user
    const claims = { level: 2 }
    if (functions.config().admin.email === user.email && user.emailVerified) claims.level = 0
    await admin.auth().setCustomUserClaims(uid, claims)

    const d = {
        uid,
        email,
        displayName,
        emailVerified,
        photoURL,
        disabled
    }
    const r = await db.collection('users').doc(uid).set(d)
    return r
})

exports.deleteUser = functions.auth.user().onCreate((user) => {
    return db.collection('users').doc(user.uid).delete()

})