const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

import { User } from "../models/User.js";

//POST -> req.body
//GET -> req.query

//******************
//**** A P I *******
//******************

//Create User
router.post("/register", async (req, res) =>{
    try {
        const newUser = {
            nombre: req.body.nombre,
            email:req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            userId: req.body.userId,
            isSuperUser: req.body.isSuperUser
        };
        const user = await User.create(
            newUser   
        );
        console.log(user);

        const response = {
            status: "success"
        };

        res.status(200).json(response);

    } catch (error) {
        console.error(error.errors[0]);
        res.status(404).json(error.errors[0].message);
    }
});

router.get("/login", async (req, res) =>{
    try {
        console.log(req.query)
        const logUser = {
            userId: req.query.userId,
            password: req.query.password
        };

        let user = await User.findOne({where:{userId: logUser.userId}});
        console.log(user.dataValues)
        if (!user) {
            const response = {
                status: "User does´t exist"
            };
            return res.status(401).json(response);
         


        } else {
            const toSend = user.dataValues;
            if (bcrypt.compareSync(logUser.password,user.dataValues.password)) {
                
                console.log(user.dataValues.nombre);
                return res.status(200).json(toSend)
            };
            
        }
    } catch (error) {
        console.error(error.errors[0]);
        res.status(404).json(error.errors[0].message);
    }
})

module.exports = router;