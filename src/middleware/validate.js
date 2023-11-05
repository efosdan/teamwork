const validator = require('../utils/validate-helpers')


const validateSignupData = async (req, res, next) => {
    const validationRules = {
        "firstname":"required|string|min:2|max:100",
        "lastname":"required|string|min:2|max:100",
        "email":"required|string|email",
        "password":"required|string|min:6"
    };

    await validator(req.body, validationRules, {}, (err, status)=>{
        if(!status) return res.status(412).json({success:false, message:'validation failed', data:err});
        next();
    }).catch( err => console.log(err))
}



const validateLoginData = async (req, res, next) => {
    const validationRules = {
        "email":"required|string|email",
        "password":"required|string|min:6"
    };

    await validator(req.body, validationRules, {}, (err, status)=>{
        if(!status) return res.status(412).json({success:false, message:'validation failed', data:err});
        next();
    }).catch( err => console.log(err))
}


module.exports = {
    validateLoginData,
    validateSignupData
};