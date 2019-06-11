const UserModel = require("../model/userschema");
function addUser(userid , password){
    UserModel.create({
        'userid':userid,'pwd':password},(err)=>{
        if(err){
            console.log('Err in DB connection',err);
        }
        else{
            console.log('Record Added');
        }
    })
    

}
addUser('lakshay','Lakshay@1999');