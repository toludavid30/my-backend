const express = require('express');
const app = express();
const connectMongoDB = require('./config/connectDB.js')
connectMongoDB()
const cors = require('cors')


const userRouter = require('./routers/auth.js')
const productRouter = require('./routers/addProd.js');
const transporter = require('./Services/nodemailer/transporter.js')
const sendTestMail = require('./Services/nodemailer/testSendEmail.js')
sendTestMail()

// const getProductsRouter = require('./routers/getProd.js');
// const productRouter = require('./routes/products.js')
// const userRouter = require('./routes/users.js')


app.use(express.json());
app.use(cors())

const PORT = 4006;
app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});

app.use('/api/auth', userRouter)
// app.use('/api/auth', productRouter)
app.use('/api/products', productRouter)

// app.use('/api/products', productRouter)
// app.use('/api/users', userRouter)





