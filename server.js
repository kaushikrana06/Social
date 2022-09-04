const express = require('express');
const mongoose = require('mongoose')

const routeRoutes = require('./Routes/route.js')

const app = express();


app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// middleware

app.use(routeRoutes)


mongoose
 .connect('mongodb+srv://kaushik:root@cluster0.w8wcg1e.mongodb.net/social?retryWrites=true&w=majority')
 .then((result) => {
    app.listen(3000,() => {
        console.log(`Server started at port 3000`)
    })
 })
 .catch(err => {
    console.log(err)
 })


// const connectDb = async () => {
//     try {
//       await mongoose.connect('mongodb+srv://kaushik:root@cluster0.w8wcg1e.mongodb.net/social')
//       app.listen(3000, () => {
//           console.log('Server started')
//       })

//     } catch (error) {
//       console.log(error.message)
//     }
//   }

// connectDb();


// app.use('/', (req, res, next) => {
//     console.log('Requested at /')
//     next()
//     res.json({
//         "Message": "success"
//     })
// })


// app.use('/route', (req, res, next) => {
//     console.log('Requested at /route')
//     return res.json({
//         "Message": "success"
//     })
// })


// app.use((req,res,next) => {
//     console.log('First middleware')
//     next()
// },
// (req,res,next) => {
//     console.log('Second Middleware')
//     next()
// })

// app.use((req,res,next) => {
//     console.log('Third middleware')
//     res.json({
//         "Message":"success"
//     })
// })