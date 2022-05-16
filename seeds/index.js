const sequelize = require("../config/connection")
const {User,Blog} = require("../models")

const users = [
    {
        username:"caphe",
        password:"123456789"
    },
    {
        username:"vanie",
        password:"987654321"
    },
    {
        username:"coca",
        password:"111111111"
    }
]

const blogs = [
    {
        title:"Hello World",
        body:"Welcome everyone to my blog, this is my first post, just want to say Hi!",
        image_url: 'https://external-preview.redd.it/hyrU4eEK6KH6UuNUS2lZMrG2-N6kAnLA4NUXsMLiPNM.jpg?auto=webp&s=7e89e06f309da5b22812d34d6adf9957ea2658fd',
        UserId:1
    },
    {
        title:"I'm the father of four......cats",
        body:"I love cats and food. So I name my cats after ingredients and beverage: Coffee, Vani, Coke and Rice",
        image_url: 'https://placekitten.com/200/200',
        UserId:1
    },
    {
        title:"EldenRing anyone?",
        body:"I love this game, it's one of the best role-playing-video-games I've ever played. But I've been beaten to death by npc so much that by the time I thought my role was...the victim.",
        image_url: 'https://placekitten.com/200/200',
        UserId:2
    }
]

const feedMe = async ()=>{
    try{
        await sequelize.sync({force:true})
        await User.bulkCreate(users,{
            individualHooks:true
        });
        await Blog.bulkCreate(blogs);
        process.exit(0);
    } catch(err){
        console.log(err)
    }
}

feedMe()