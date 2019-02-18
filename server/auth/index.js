const express = require('express');
const Joi = require('joi');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require("../models/User");

const router = express.Router();

const schema = Joi.object().keys({
    username: Joi.string().regex(/(^[a-zA-Z0-9_!@#$%^&*]+$)/).min(2).max(30).required(),
    password: Joi.string().trim().min(8).required()
})



router.post('/signup', (req,res,next) => {
    const result = Joi.validate(req.body, schema)
    if(result.error === null){
        User.findOne({
            username:req.body.username,
        }).then(user => {
            if(user){
                // there is already user in the db with this username
                const err= new Error('That username already exists.Please choose another one.');
                res.status(409);
                next(err);
            } else {
                //  hash the password
                bcrypt.hash(req.body.password.trim(), 12).then(hashedPassword => {
                    // insert the user with hash
                    var newUser = new User(req.body)
                    var newUserInfo = new User({
                        username: newUser.username,
                        password: hashedPassword
                    })
                    newUserInfo.save((error , insertedUser) =>{
                        if(error){
                            console.log(error)
                            res.status(500).json({
                                success: false,
                                message: 'Ooop! Something went wrong.'
                              })    
                            return
                        } else {
                            createTokenSendResponse(insertedUser, res, next);
                        }
                    })
                }).catch(error => {
                    console.log(error)
                })           
            }
        })
    } else {
        res.status(422)
        next(result.error);
    }      
})


router.post('/login', (req,res,next) => {
    const result = Joi.validate(req.body, schema)
    if(result.error === null){
        User.findOne({
           username : req.body.username,
       }).then(user =>{
         if(user){
            // req.body.password is going to be hashed by bcrypt
            // and then compare it with the hashed user.password
            bcrypt.compare(req.body.password, user.password).then((result) => {
                if(result){
                    createTokenSendResponse(user, res, next)

                } else {
                    respondError422(res , next)
                }
            })
         } else {
            //  user not found in the db
            respondError422(res , next)
         }
       })
    } else{
        respondError422(res , next)
    }

})


// CREATE TOKEN
function createTokenSendResponse(user, res, next){
    const payload = {
        _id: user._id,
        username: user.username
    }
    jwt.sign(payload, process.env.TOKEN_SECRET, {
        expiresIn: '7d'
    }, (err, token) => {
        if(err){
            respondError422(res, next);
        } else {
            res.json({ token })
        }
    })
}

function respondError422(res , next){
    res.status(422);
    const error = new Error('Unable to login.')
    next(error)
}

module.exports = router;