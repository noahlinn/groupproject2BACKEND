require('dotenv').config()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const models = require('../models')
const userController = {}


userController.signUp = async (req, res) => {
  try {
    console.log('hello')
    const hashedPassword = bcrypt.hashSync(req.body.password, 10)
    const user = await models.user.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    })
    console.log('hello')
    const encryptedId = jwt.sign({ userId: user.id }, process.env.JWT_SECRET)
    res.json({message: 'Signed up', userId: encryptedId, userName: user.name, userEmail: user.email})
  } catch (error) {
    res.status(400)
    res.json({ error: 'You used that email already, silly.' })
  }
}

userController.login = async (req, res) => {
  try {
    const user = await models.user.findOne({
      where: {
        email: req.body.email
      }
    })
    if (bcrypt.compareSync(req.body.password, user.password)) {
      const encryptedId = jwt.sign({ userId: user.id }, process.env.JWT_SECRET)
      res.json({message: 'login successful', userId: encryptedId, userName: user.name, userEmail: user.email})
    }else{
      res.status(401)
      res.json({ error: 'Password is incorrect' })
    }
  } catch (error) {
    res.status(400)
    res.json({ error: 'login failed' })
  }
}


//finds all business that has a userId of whatever user 
userController.findBusinesses = async (req, res) => {
  try {
    const decryptedId = jwt.verify(req.params.id, process.env.JWT_SECRET)
    const business = await models.business.findAll({
      where: {
        userId: decryptedId.userId
      }
    })
    res.json({ message: 'business(es) owned by user', business })
  } catch (error) {
    res.json({ error })
  }
}


//gets all businesses that user has written a review on as well as the review
userController.findReviews = async (req, res) => {
  try {
    const decryptedId = jwt.verify(req.params.id, process.env.JWT_SECRET)
    const user = await models.user.findOne({
      where: {
        id: decryptedId.userId

      }
    })
    const userReviews = await user.getBusinesses()
    res.json({ user, userReviews })
  } catch (error) {
    res.json({ error })
  }
}

userController.getUser = async(req,res) => {
  try {
    const user = await models.user.findOne({where:{
      id: req.params.id
    }})
      let userName = user.name
      let userEmail = user.email
    res.json({userName, userEmail})
  } catch (error) {
    res.json({error})
  }
}









  module.exports = userController;