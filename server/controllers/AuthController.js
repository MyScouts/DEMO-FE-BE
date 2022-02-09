const UserModel = require("../models/UserModel")
const { addDateWithNow } = require("../utils/DataTime")
let JWT = require('jsonwebtoken')
const { PASSPORT_SERECT } = require("../common/config")



let encodeedToken = (userID, authen = true) => {
    return JWT.sign({
        iss: "MYPROJECT",
        sub: userID,
        iat: new Date().getTime(),
        exp: addDateWithNow(6)
    }, PASSPORT_SERECT)
}
// 
let register = async (req, res, next) => {
    let { firstName, lastName, email, password, phoneNumber } = req.value.body
    // check user is exsit
    condicion = []

    if (email) {
        let foundUser = await UserModel.findOne({ email })
        if (foundUser) return res.status(301).json({
            message: "Email is exists!",
            success: false,
            status: 301
        })
    }

    if (phoneNumber) {
        let foundUser = await UserModel.findOne({ phoneNumber })
        if (foundUser) return res.status(302).json({
            message: "Phone Number is exists!",
            success: false,
            status: 302
        })
    }

    let newUser = await new UserModel({ firstName, lastName, email, password, phoneNumber })
    await newUser.save()

    let token = encodeedToken(newUser._id)
    return res.status(200).json({
        success: true,
        status: 200,
        data: {
            successToken: token,
            firstName: newUser.firstName,
            lastName: newUser.lastName
        }
    })
}


module.exports = {
    register
}