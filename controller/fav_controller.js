const fav_pizza = require('../schema/fav_schema')

exports.addfavpizza = async (req, res) => {
  const { id, name, image, catchy_phrase } = req.body;

  try {
    // Check if a pizza with the same id already exists
    const existingPizza = await fav_pizza.findOne({ id });
    if (existingPizza) {
      // If a pizza with the same id already exists, show an alert message
      return res.status(400).json({ message: 'Pizza already exists' });
    }

    // If the pizza does not exist, create a new instance and save it to the database
    const favpizza = new fav_pizza({ id, name, image, catchy_phrase });
    await favpizza.save();
    return res.status(200).json({ message: 'Pizza added' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};


exports.getfavpizza = async (req, res) => {
    const pizza = await fav_pizza.find()

    try {
        res.status(200).json(pizza)
    } catch (error) {
        res.status(401).json(error)
    }

}

exports.removefav = async (req, res) => {

    const { id } = req.params

    try {

        const _removed = await fav_pizza.deleteOne({ id })

        if (_removed) {
            const fav = await fav_pizza.find()
        } else {
            res.status(401).json("error")
        }


    } catch (error) {
        res.status(401).json(error)

    }



}