const models = require('../models')

const reviewController = {}

reviewController.addOne = async (req,res) => {
    try {
        const newReview = await models.review.findOrCreate({where: {
            userId: req.body.userId,
            businessId: req.body.businessId,
            rating: req.body.rating,
            title: req.body.title,
            description: req.body.description
        }
        })
        res.json({message: 'review added', newReview})
    } catch (error) {
      res.json({error})
    }
}







module.exports = reviewController;