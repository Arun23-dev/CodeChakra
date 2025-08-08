const mongoose = require('mongoose');
// console.log(process.env.DB_CONNECT_KEY)
async function main() {
        
         await mongoose.connect(process.env.DB_CONNECT_KEY);     
    
}
module.exports=main;