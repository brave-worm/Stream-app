import express from 'express'

const app = express()

app.get('/api/', (req, res) => res.send('OK!'))

app.listen(3001, () => {
    console.log('Server is up!!')
})