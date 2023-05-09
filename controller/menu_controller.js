const menu_items = require('../schema/menu_schema')

//display all menu

exports.gettallmenu = async (req, res) => {
    //use await
    const menu = await menu_items.find()
    try {
        res.status(200).json(menu)
    } catch (error) {
        res.status(402).json(error)
    }

}

exports.viewpizza = async (req, res) => {

    const id = req.params.id


    try {
        const product = await menu_items.findOne({ id })
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json(error)

    }



}

exports.removemenu = async (req, res) => {

    const { id } = req.params

    try {
        const _deletemenu = await menu_items.deleteOne({ id })


        if (_deletemenu) {
            const order = await menu_items.find()
        } else {
            res.status(404).json("srtg")
        }


    } catch (error) {
        res.status(404).json(error)
    }



}


exports.addtomenu = async (req, res) => {
    const { id, name, description, price, image, crust,veg, catchy_phrase } = req.body

    try {
        const addmenu = new menu_items({
            id, name, description, price, image, crust,veg, catchy_phrase
        })

        await addmenu.save()
        res.status(200).json("added")


    } catch (error) {
        res.status(404).json(error)
    }

}