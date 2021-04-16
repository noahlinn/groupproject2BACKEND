//SEED DATABASE W USERS
//INSERT DESIRED USERID'S (THE OWNER) INTO EACH BUSINESS OBJECT
//COMMENT OUT USER FUNCTION
//SEED DATABASE W BUSINESSES
//INSERT BUSINESSID AND A *DIFFERENT* USERID (THE REVIEWER) INTO EACH REVIEW OBJECT 
//COMMENT OUT BUSINESS FUNCTION
//SEED DATABASE W REVIEWS

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

// new User('Tiffanie Dorsey', 'TiffanieR.Dorsey@email.com', 'test')
// new User('Anthony Sanders', 'AnthonyL.Sanders@email.com', 'test')
// new User('William Hollis', 'WilliamM.Hollis@email.com', 'test')
// new User('Kathryn Jay', 'KathrynL.Jay@email.com', 'test')
// new User('Taylor Rolli', 'TaylorRolli@email.com', 'test')
// new User("Mustafa Wolf", "MustafaWolf@test.com", "test")
// new User("Cordelia Gaylord", "CordeliaGaylord@test.com", "test")
// new User("Monique Hoeger", "MoniqueHoeger@test.com", "test")
// new User("Salvador Emard", "SalvadorEmard@test.com", "test")
// new User("Vickie Abshire", "VickieAbshire@test.com", "test")
// new User("Kyleigh Wuckert", "KyleighWuckert@test.com", "test")
// new User("Anita Sporer", "AnitaSporer@test.com", "test")
// new User("Katrina Walsh", "KatrinaWalsh@test.com", "test")
// new User("Orland Kshlerin", "OrlandKshlerin@test.com", "test") 


// users.forEach((user) => {
//     models.user.create(user)
// })




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


//RESTAURANTS//

//new Business("*USERID*","The Paradise Blossom", "Restaurants", '68 High Road Boston, Ma', "Our bakery is one of the oldest surviving bakeries in the world; baking history and tradition dating back thousands of years. Until recently were the only bakery in the country with this heritage.")
//new Business("*USERID*","The Polar Pipe", "Restaurants", "8 53rd Street Brooklyn, NY", "We serve our delicious foods with the utmost care and quality. We are a small family owned restaurant, so we spend a lot of time evaluating your needs and cooking your meals to perfection.")
//new Business("*USERID*","The Mountainview Pizzeria", "Restaurants", "7887 Walnutwood Drive Brooklyn, NY", ' Our goal is to provide our guests with an opportunity to enjoy and experience some of the best food and beverage selections in town.')
//new Business("*USERID*","The Spring Spices", "Restaurants", "7500 E. Hall Street Atlanta, GA", "We serve our coffees as they are roasted, so you get what’s on offer – rich flavour and smooth brewing without affecting any of the elements above.")
//new Business("*USERID*","The Pepper Pig", "Restaurants", "752 Sierra Ave Atlanta, GA", "We are a family owned and run business and we love our customers. At our bar, you will find a great selection of spirits, wines and beers to start your evening off right.")
//new Business("*USERID*","Chance", "Restaurants", "64 Sleepy Hollow Drive Atlanta, GA", "We serve authentic Italian cuisine, which means that your food is cooked to order, and comes with delicious wines.")
//new Business("*USERID*","Little Italy", "Restaurants", "9627 Kent Ave Washington, DC", " Our menu offers you the best fresh ingredients, as well as Italian wines, cocktails, and local craft beers.") 
//new Business("*USERID*","Buttons", "Restaurants", "46 Colonial Rd Washington, DC", "We serve food with great passion and it’s delicious. Our customers are our ambassadors – welcome them as a friend and partner.")
//new Business("*USERID*","Embers", "Restaurants", "304 Illinois Court Washington, DC", "Our mission is to create a boutique coffee culture around artisan coffee. We pride ourselves on giving all of our customers the best coffee experience.")
//new Business("*USERID*","The Bell Tower", "Restaurants", "7941 Old York Drive Washington, DC", "We bring traditional Japanese hospitality and traditional Japanese cuisine to guests and guests enjoy our food with us.")


//HOTELS AND TRAVEL//

// new Business("*USERID*", "Glorious Baron Hotel", "Hotels & Travel", "64 Sleepy Hollow Drive Atlanta, Ga", "We are pleased to be able to announce that we now offer a 3 star boutique property with a 4 restaurant and bar, a children's play area, and on-site catering.")
// new Business("*USERID*", "Northern Heirloom Hotel", "Hotels & Travel", "64 Sleepy Hollow Drive Atlanta, GA", "We are dedicated to bringing you everything you could ever want in a relaxing and convenient environment.")
// new Business("*USERID*", "Royal Blossom Resort & Spa", "Hotels & Travel", "9627 Kent Ave Washington, DC", "We love what we do and are passionate about creating an exceptional experience for our guests.") 
// new Business("*USERID*", "Secluded Tide Resort", "Hotels & Travel", "9627 Kent Ave Washington, DC", "We are offering guests a relaxed stay with a range of facilities and services that we feel will make the stay easy and enjoyable for guests") 
// new Business("*USERID*", "Antique Ocean Hotel", "Hotels & Travel", "18 Beech Ave Boston, Ma", "We are passionate about creating experiences for people everywhere – from birthdays to corporate events to weddings.")
// new Business("*USERID*", "Remote Pier Resort & Spa", "Hotels & Travel", "78 Shore Road Boston, Ma", "With its simple, contemporary style and warm hospitality, we feel you will be charmed by the food, ambience & our beautiful surroundings!")


//PLACEHOLDER BUSINESSES FOR EACH CATEGORY//

//new Business("*USERID*", 'Maggio PLC', 'Professional Services', '2774 Metz Lane Boston, Ma', 'Balanced Solution-Oriented Productivity')
//new Business("*USERID*", 'Satterfield, Adams and Erdman', 'Arts & Entertainment', '7 South Brown Drive Washington, DC', 'Polarised User-Facing Success')
//new Business("*USERID*", 'Lowe, Harber and Spinka', 'Health & Medical', '7090 Lilac Dr Atlanta, GA',  'Seamless Dedicated Parallelism')
//new Business("*USERID*", 'Crooks-Goyette', 'Pets', '58 SW. Alton Street Boston, Ma', 'Visionary Directional Hierarchy')
//new Business("*USERID*", 'Boyer PLC', 'Real Estate',  "7633 Highland Ave Brooklyn NY", 'Robust Actuating Graphicaluserinterface')






// businesses.forEach((business) => {
//     models.business.create(business)
// })





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




// //  RESTAURANT REVIEWS 

// new Review("*USERID*", "*BUSINESSID*", 5, 'Excellent experience start to finish! ', 'I had been to the Kendall location and knew how hard it is to get a table there and was pleasantly surprised to have the ability to add our party to the virtual waitlist. It worked perfectly! I got a reminder to activate it, checked in with the host and was sat exactly when we had hoped! ')
// new Review("*USERID*", "*BUSINESSID*", 5, 'Delicious food and amazing waitstaff!', 'The server was super pleasant and the food was awesome as always. Any worries I had about overcrowding was quickly dissipated. There was plenty of room in between parties and the outdoor seating was wonderful. 10/10! Strongly recommend!')
// new Review("*USERID*", "*BUSINESSID*", 4, 'Fun spot for all things breakfast related.', ' The hip eclectic vibes and upbeat atmosphere make this the ideal social hang out place for brunch or breakfast anytime. The food is good and the portions are certainly filling.')
// new Review("*USERID*", "*BUSINESSID*", 1, 'Not Good.', 'This location was packed and it took about an hour to get our meals.  The food was ok but it didnt make up for the slow service.')
// new Review("*USERID*", "*BUSINESSID*", 5, 'Cant wait to go back!', 'I got the monster breakfast with cayenne cheddar french toast( sounds weird but the flavours worked really well, try it! My friend had the hash quiche which she loved. I wonder if they sell their bread as a loaf because I cant stop thinking about it.')
// new Review("*USERID*", "*BUSINESSID*", 3, 'Good atmosphere', 'I walked into this place expecting a tourist trap and zero expectations; ended up pleasantly surprised. Place reminded me of a slightly higher class diner.')
// new Review("*USERID*", "*BUSINESSID*", 1, 'Nope', 'To be honest, I tried a bite of everything and decided to just throw it away to end my suffering and embarrassment from choosing to spend my money here.')
// new Review("*USERID*", "*BUSINESSID*", 4,  "Very nice staff.", 'Super busy & crazy on a Sat at brunch time just a heads up, but we had the best girl ever, despite how crazy it was she super attentive and never missed a beat.')




// // HOTEL & TRAVEL REVIEWS 

// new Review("*USERID*", "*BUSINESSID*",1,'Not Good.', 'Theyre dishonest. They charge a $10 parking fee to park your car in their parking lot. So basically the price is $10 more than advertised because obviously no one is going to go and park somewhere off the property.')
// new Review("*USERID*", "*BUSINESSID*",5,'The staff is great. The property is located in a beautiful area. Room are always exceptionally clean. Staff provides highest level of service')
// new Review("*USERID*", "*BUSINESSID*",3,'It was just so so.', 'The help was friendly and we used the bus for a trip to eat.The room was not my favorite as the air conditioning fan was really loud. I did a sound check and it peaked at 76 dB. Thats a bit loud for sleeping. And the relay click was startling when it started up.')
// new Review("*USERID*", "*BUSINESSID*",3,'Not my Favorite', 'It serves its purpose but everything feels a little bit run down and worn out. As other have said the air conditioners in the rooms are also very loud. I was here in early October and wished that I could have just opened my window.')
// new Review("*USERID*", "*BUSINESSID*",5, "Another top notch experience", 'The checkin process with the digital checkin is great. They also had bagged breakfasts to go, which was nice to grab then continue on my road trip. Highly recommend')
// new Review("*USERID*", "*BUSINESSID*",5, "They are very convenient.", 'The staff was friendly and kindly accommodated our late check out request even though we didnt need to use it in the end. The check out hour for noon is also decent and not rushed like other hotels that have a 10:00 am check out. And there are many cafes and restaurants and shopping around.')


// reviews.forEach((review) => {
//     models.review.create(review)
// })






