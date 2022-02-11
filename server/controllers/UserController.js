const PaymentModel = require("../models/PaymentModel")
const UserModel = require("../models/UserModel")

// 
const profile = async (req, res, next) => {

    let userInfo = await UserModel.aggregate([

        {
            $project: {
                address1: 1,
                address2: 1,
                orders: 1,
                firstName: 1,
                lastName: 1,
                phoneNumber: 1,
                email: 1,
                avatar: 1,
                ipLogin: 1,
                pointTotal: 1,
                coinTotal: 1,
                sex: 1,
                birthDay: 1,
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

const newPaymentMethod = async (req, res, next) => {
    const { cardExpiration, cardNumber, firstName, lastName, method, securityCode } = req.value.body
    let userInfo = await UserModel.findOne({ _id: req.user._id })

    if (!userInfo) {
        return res.status(404).json({
            status: 404,
            success: false,
            message: "User not found",
            data: null
        })
    } else {
        const payment = await new PaymentModel({
            userId: userInfo._id,
            paymentMethod: method,
            firstName: firstName,
            lastName: lastName,
            expiryDate: cardExpiration,
            cardNumber: cardNumber,
            cvv: securityCode
        }).save()

        return res.status(200).json({
            status: 200,
            success: true,
            message: "",
            data: payment
        })
    }
}

const paymentsMethod = async (req, res, next) => {
    const payments = await PaymentModel.find({ userId: req.user._id, logical_delete: null })
    return res.status(200).json({
        status: 200,
        success: true,
        message: "",
        data: payments
    })
}

const deletePaymentMethod = async (req, res, next) => {
    const paymentId = req.value.params.paymentId
    const payment = await PaymentModel.findOne({ _id: paymentId })
    payment.logical_delete = new Date()
    await payment.save()
    return res.status(200).json({
        status: 200,
        success: true,
        message: "",
    });
}

const updatePaymentMethod = async (req, res, next) => {
    const paymentId = req.value.params.paymentId
    const { cardExpiration, cardNumber, firstName, lastName, method, securityCode } = req.value.body
    const payment = await PaymentModel.findOne({ _id: paymentId })
    payment.paymentMethod = method
    payment.firstName = firstName
    payment.lastName = lastName
    payment.cardNumber = cardNumber
    payment.cvv = securityCode
    payment.expiryDate = cardExpiration
    await payment.save()
    return res.status(200).json({
        status: 200,
        success: true,
        message: "",
    });
}


const addPointsMethod = async (req, res, next) => {
    const { point } = req.value.body
    const user = await UserModel.findOne({ _id: req.user._id })
    user.pointTotal += point
    await user.save()
    return res.status(200).json({
        status: 200,
        success: true,
        message: "",
    });
}

const updateCoinMethod = async (req, res, next) => {
    const { coin } = req.value.body
    const user = await UserModel.findOne({ _id: req.user._id })

    if (user.pointTotal >= coin * 100) {
        user.coinTotal += coin
        user.pointTotal -= coin * 100
        await user.save()
        return res.status(200).json({
            status: 200,
            success: true,
            message: "",
        });
    } else {
        return res.status(200).json({
            status: 200,
            success: false,
            message: "Not enough points",
            data: null
        });
    }


}
module.exports = {
    profile,
    newPaymentMethod,
    paymentsMethod,
    deletePaymentMethod,
    updatePaymentMethod,
    addPointsMethod,
    updateCoinMethod
}