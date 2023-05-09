const admindetails = require('../schema/admin_schema')

exports.admindetails = async(req,res)=>{
    const admin = await admindetails.find()

    try {
        res.status(200).json(admin)
    } catch (error) {
        res.status(401).json(error)
    }

}