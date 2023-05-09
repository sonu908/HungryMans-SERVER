const pendingOrders= require('../schema/pending_schema')

exports.pending  = async (req , res)=>{
    const { name, phone, address } = req.body



    try {

        const pendingpizza = new pendingOrders({
             name, phone, address 
        })

        await pendingpizza.save()
        res.status(200).json("added")
    } catch (error) {
        res.status(401).json(error)
    }

}