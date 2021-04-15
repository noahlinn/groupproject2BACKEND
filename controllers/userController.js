const models = require('../models')

const userController = {}


userController.signUp = async (req,res) => {
  try {
    const user = await models.user.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
    res.json({message: 'Signed up', user})
  } catch (error) {
    res.status(400)
    res.json({error: 'You used that email already, silly.'})
  }
}

userController.login = async (req,res) => {
  try {
    const user = await models.user.findOne({
      where: {
        email: req.body.email
      }
    })
    if(user.password === req.body.password){
      res.json({message: 'login successful', user: user})
    }else{
      res.status(401)
      res.json({error: 'Password is incorrect'})
    }
  }catch(error) {
      res.status(400)
      res.json({error: 'login failed'})
  }
}


//finds all business that has a userId of whatever user 
userController.findBusinesses = async (req,res) => {
  try {
    const business = await models.business.findAll({where:{
      userId: req.params.id
    }})
    res.json({message: 'business(es) owned by user', business})
  } catch (error) {
    res.json({error})
  }
}


//gets all businesses that user has written a review on as well as the review
userController.findReviews = async (req,res) => {
  try {
    const user = await models.user.findOne({where:{
      id: req.params.id
    }})
    const userReviews = await user.getBusinesses()
    res.json({user, userReviews})
  } catch (error) {
    res.json({error})
  }
}









module.exports = userController;