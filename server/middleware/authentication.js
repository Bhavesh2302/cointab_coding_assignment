

// const authentication = (req,res,next) =>{
    
//     if(!req.headers.authorization){
//         return res.status(401).send({message :"Something went wrong please try again"})
//     }
    
//     const token = req.headers.authorization.split(" ")[1]
//     jwt.verify(token,SECRET_KEY , function(err, decoded) {
//        if(err){
//         return res.status(401).send({message :"Something went wrong please try again"})
//        }
//        else{
//         req.body.userId = decoded.userId
//         next()
//        }
//       });

// }