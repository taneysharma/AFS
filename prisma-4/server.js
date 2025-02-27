// const express = require("express") ;
// const app = express() ;

// const { PrismaClient } = require('@prisma/client');

// const prisma = new PrismaClient()

// app.use(express.json()) ;

// app.get("/users/:email",async(req,res) => {
//     const {email} = req.params ;
//     const user = await prisma.user.findUnique({
//         where: {
//           email: email,
//         },
//       })
//       res.json({user}) ;
// })
// app.post("/users",async(req,res) => {
//     const {email,name} = req.body ;
//     let newUser = await prisma.user.create({
//         data:{
//             email:email ,
//             name:name
//         }
//     })
//     res.json({newUser}) ;
// }) 
// app.delete("/users/:email",async(req,res) => {
//     const {email}  = req.params
//     const deleteUser = await prisma.user.delete({
//         where: {
//           email: email ,
//         },
//       })
//       res.send("User deleted successfully") ;
// }) 
// app.put("/users/:email",async(req,res) => {
//     const {email}  = req.params
//     const updateUser = await prisma.user.update({
//         where: {
//           email: email ,
//         },
//         data: {
//           id: 2,
//         },
//       })
//       res.send("User updated successfully") ;
// }) 

// app.listen(4545,() => {
//     console.log("Server is running on port 4545") ;
// })




const express = require("express");
const app = express();

app.use(express.json());


app.use("/api/users", require("./routes/userRoute"))
app.use("/api/blogs", require("./routes/blogRoute"))
app.use("/api/auth", require("./routes/auth"))
app.use("/api/likes", require("./routes/likeRoute"))
app.listen(4545, () => {
    console.log("server started")
})