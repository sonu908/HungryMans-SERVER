const toppings_model = require('../schema/toppings_schema')

exports.getalltoppings = async (req,res) =>{

const items = await toppings_model.find()

try {
   res.status(200).json (items)
} catch (error) {
    res.status(402).json(error)
}

}


