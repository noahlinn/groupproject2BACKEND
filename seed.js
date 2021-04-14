const models = require('./models')

const users = []

class User {
    constructor(name,email,password){
        this.name = name,
        this.email = email,
        this.password = password
        users.push(this)
    }
}

new User('Tiffanie R. Dorsey', 'TiffanieR.Dorsey@email.com', 'test')
new User('Anthony L. Sanders', 'AnthonyL.Sanders@email.com', 'test')
new User('William M. Hollis', 'WilliamM.Hollis@email.com', 'test')
new User('Kathryn L. Jay', 'KathrynL.Jay@email.com', 'test')
new User('Anthony L. Sanders', 'AnthonyL.Sanders@email.com', 'test')


users.forEach((user) => {
    models.user.create(user)
})




const businesses = []

class Business {
    constructor(userId, name, type, address, description){
            this.userId = userId,
            this.name = name,
            this.type = type,
            this.address = address,
            this.description = description
            businesses.push(this)
    } 
}

new Business(1, 'Maggio PLC', 'Food', '2774  Metz Lane', 'Balanced Solution-Oriented Productivity')
new Business(2, 'Satterfield, Adams and Erdman', 'Professional Services', '2774  Metz Lane', 'Polarised User-Facing Success')
new Business(3, 'Lowe, Harber and Spinka', 'Professional Services', '2774  Metz Lane',  'Seamless Dedicated Parallelism')
new Business(4, 'Crooks-Goyette', 'Real Estate', '2774  Metz Lane', 'Visionary Directional Hierarchy')
new Business(5, 'Boyer PLC', 'Hotels & Travel', '2774  Metz Lane', 'Robust Actuating Graphicaluserinterface')

businesses.forEach((business) => {
    models.business.create(business)
})




const reviews = []

class Review {
    constructor(userId, businessId, rating, title, description){
        this.userId = userId,
        this.businessId = businessId,
        this.rating = rating,
        this.title = title,
        this.description = description
        reviews.push(this)
    }
}

new Review(1,3,3,'My review', 'review review review review review review review')
new Review(4,2,1,'My review is great', 'review review review review review review review')
new Review(2,5,3,'My review is the best', 'review review review review review review review')
new Review(5,1,1,'My review is trash', 'review review review review review review review')
new Review(3,2,1,'My review i hate it', 'review review review review review review review')
new Review(2,1,5,'My review its amazing', 'review review review review review review review')
new Review(1,4,2,'My review nope', 'review review review review review review review')


reviews.forEach((review) => {
    models.review.create(review)
})