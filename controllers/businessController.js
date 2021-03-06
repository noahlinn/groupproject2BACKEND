const models = require('../models')
require('dotenv').config()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const businessController = {}
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


//adds business to business table
businessController.addOne = async (req,res) => {
    try {
        const decryptedId = jwt.verify(req.body.userId, process.env.JWT_SECRET)
        const newbusiness = await models.business.create({
            userId: decryptedId.userId,
            name: req.body.name,
            type: req.body.type,
            address: req.body.address,
            description: req.body.description
        })
        res.json({message: 'business added', newbusiness})
    } catch (error) {
      res.json({error})
    }
}

//gets all businesses & infoherok
businessController.getAll = async (req,res) => {
    try {
        const allBusinesses = await models.business.findAll()
        res.json(allBusinesses)
    } catch (error) {
        res.json({error})
    }
}



businessController.getByName = async (req,res) => {
    try {
        const businesses = await models.business.findAll({where:{
            name: {
                [Op.iLike]: `%${req.params.name}%`
              }
        }})
        res.json(businesses)
    } catch (error) {
        res.json({error})
    }
}

businessController.getByType = async (req,res) => {
    try {
        const businesses = await models.business.findAll({where:{
            type: req.params.type
        }})
        res.json(businesses)
    } catch (error) {
        
    }
}



//gets specific business and info then gets info on business owner
businessController.getInfo = async (req,res) => {
    try {
        const business = await models.business.findOne({where:{
            id: req.params.id
        }})
        const userId = business.userId
        const owner = await models.user.findOne({where:{
            id: userId
        }})
        res.json({business, owner})
    } catch (error) {
        res.json({error})
    }
}


//gets all users that have written a review on the business as well as the review
//(gets all reviews)
businessController.findReviews = async (req,res) => {
    try {
        const reviews = await models.review.findAll({
            where:{
                businessId: req.params.id
            },
            order: [
                ['createdAt', 'DESC']
            ]
        })

        res.json({message: 'reviews on the business', reviews})
    } catch (error) {
        res.json({error: 'business has no reviews'})
    }
}

businessController.delete = async (req,res) => {
    try {
        const business = await models.business.findOne({where:{
            id: req.params.id
        }})
        await business.destroy()
        res.json({message: 'business deleted'})
    } catch (error) {
        res.json({error})
    }
}

businessController.update = async (req,res) => {
    try {
        const updates = req.body
        const business = await models.business.findOne({where:{
            id: req.params.id
        }})
        const updatedBusiness = await business.update(updates)
        res.json({message: 'business updated', updatedBusiness})
    } catch (error) {
        res.json({error})
    }
}








module.exports = businessController;