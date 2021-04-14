const models = require('../models')

const userController = {}


userController.signUp = async (req,res) => {
    try {
      const newUser = await models.user.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      })
      res.json({message: 'Signed up', newUser})
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
    } catch (error) {
       res.status(400)
       res.json({error: 'login failed'})
    }
}









module.exports = userController;