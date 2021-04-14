const models = require('../models')

const businessController = {}



businessController.addOne = async (req,res) => {
    try {
        const newbusiness = await models.business.findOrCreate({where: {
            userId: req.body.userId,
            name: req.body.name,
            type: req.body.type,
            address: req.body.address,
            description: req.body.description
        }
        })
        res.json({message: 'business added', newbusiness})
    } catch (error) {
      res.json({error})
    }
}





module.exports = businessController;