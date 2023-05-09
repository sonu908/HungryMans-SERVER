const addressanditems = require('../schema/addressanditem')

exports.postaddress_item = async (req, res)=>{
    const {pending, orders} = req.body
    
    


    try {

        const add_item = new addressanditems({
            pending,orders
        })

        await add_item.save()
        res.status(200).json("added")
    } catch (error) {
        res.status(401).json(error)
    }

}

exports.getfromaddress = async (req, res)=>{
    const pendingdetails = await addressanditems.find()

    try {
        res.status(200).json(pendingdetails)
    } catch (error) {
        res.status(401).json(error)
    }
}