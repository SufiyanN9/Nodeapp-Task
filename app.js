const express = require ('express')
const app = express()

app.get ('/',(req,res)=> res.send('Welcome to dockarised app'))
app.listen (3000, () => console.log('sever ready'))