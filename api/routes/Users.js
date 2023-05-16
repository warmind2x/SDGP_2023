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
})

module.exports = router;