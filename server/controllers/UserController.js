const UserModel = require("../models/UserModel")

// 
let profile = async (req, res, next) => {

    let userInfo = await UserModel.aggregate([

        {
            $project: {
                address: 1,
                orders: 1,
                firstName: 1,
                lastName: 1,
                phoneNumber: 1,
                email: 1,
                avatar: 1,
                ipLogin: 1,
                createdAt: { $dateToString: { format: "%Y-%m-%d %H:%M:%S", date: "$createdAt" } },
                lastLogin: { $dateToString: { format: "%Y-%m-%d %H:%M:%S", date: "$lastLogin" } },
            }
        },
        {
            $match: {
                _id: req.user._id
            }
        },
        { $limit: 1 },
    ])

    return res.status(200).json({
        status: 200,
        success: true,
        message: "",
        data: userInfo[0]
    })
}

module.exports = {
    profile
}