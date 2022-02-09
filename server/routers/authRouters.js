let router = require('express-promise-router')()
let authController = require('../controllers/AuthController')
let passport = require('passport')
let passportConfig = require('../middlewares/passport')
const authSchemas = require('../validations/authSchemas')
const { validatorBody } = require('../validations/base')
// 


router.route('/register')
    .post(validatorBody(authSchemas.signUp), authController.register)



module.exports = router