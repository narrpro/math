module.exports = (err, req, res, next) => {
    if (err.message === 'acess denied') {
        res.status(403)
        res.json({ error: err.message })
    }
    res.send(err.message)
}


// app.use((err, req, res, next) => {