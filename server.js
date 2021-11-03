//require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')


const app = express()
app.use(express.json())
app.use(cors())

/*app.use('/', (req, res, next) => {
    res.json({msg: "Hello Everyone!"})
})*/

app.use('/user', require('./routes/userRouter'))

mongoose.connect('mongodb+srv://GDSC:123GDSC@cluster0.ujysb.mongodb.net/GDSC?retryWrites=true&w=majority',
{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log("Connexion sucess !")
}).catch((error) => {
    console.log(error);
});

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
})