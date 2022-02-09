const router = require("express-promise-router")()
const multer = require('multer')
const storage = require("../middlewares/UploadFile")
const { imageFilter } = require('../utils/ImageFilter')
const passport = require('passport')
const passportConfig = require('../middlewares/passport')
const userController = require('../controllers/UserController')


router.route('/profile')
    .get(passport.authenticate('jwt', { session: false }), userController.profile)
// .post(passport.authenticate('jwt', { session: false }), multer({ storage: storage, fileFilter: imageFilter }).single('avatar'), userController.updateProfile)

module.exports = router