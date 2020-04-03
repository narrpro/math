const admin = require('firebase-admin')

module.exports = (req, res, next) => {
    admin.auth().verifyIdToken(req.headers.authorization)
        .then(function(decodedToken) {
            req.claims = decodedToken
            next()

        }).catch(function(e) {
            console.error(e.message)
            res.status(401).send()

        })
        // next()
}