const express = require('express')
const app = express()
const cors = require('cors')
const admin = require('firebase-admin')
require('express-async-errors')

const db = admin.firestore()
app.use(cors({ origin: true }))

app.use(require('../middlewares/verifyToken'))

app.get('/users', async(req, res) => {
    if (req.claims.level > 0) return res.status(403).send({ message: 'not 인증' })
    const s = await db.collection('users').get()
    const r = {
        items: [],
        totalCount: s.size
    }

    s.forEach(v => r.items.push(v.data()))
    res.send(r)
})

app.use(require('../middlewares/error'))

module.exports = app