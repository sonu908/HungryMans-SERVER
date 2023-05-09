const Order_items = require('../schema/orders_schema')
const toppings_schema = require('../schema/toppings_schema')

exports.ordernow = async (req, res) => {
    const { id, name, price, image, crust } = req.body



    try {

        const orderedpizza = new Order_items({
            id, name, price, image, crust
        })

        await orderedpizza.save()
        res.status(200).json("added")
    } catch (error) {
        res.status(401).json(error)
    }

}
exports.getordderdetails = async (req, res) => {

    const orderedpizza = await Order_items.find()


    try {
        res.status(200).json(orderedpizza)
    } catch (error) {
        res.ststus(401).json(error)
    }
}

exports.removeorder = async (req, res) => {
    const { id } = req.params

    try {
        const _deletedpizza = await Order_items.deleteOne({ id })


        if (_deletedpizza) {
            const order = await Order_items.find()
        } else {
            res.status(404).json("srtg")
        }


    } catch (error) {
        res.status(404).json(error)
    }


}
// exports.posttoppings() = async (req, res) => {
//     const { top, priceaddon } = req.body

//     try {
//         const selectedtop = new toppings_schema({
//             top, priceaddon
//         })
//         await selectedtop.save()
//         res.status(200).json("added")
//     } catch (error) {
//         res.status(401).json(error)
//     }


