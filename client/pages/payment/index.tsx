import PaymentInfo from '../../components/paymens/Payments/PaymentInfo'
import React, { useEffect, useState } from 'react'
import PointInfo from '../../components/paymens/Points/PointInfo'
import styles from './payment.module.scss'
import { getPaymentService, getUserInfoService, IPaymentInfo, IUserInfo } from '../../reponsitory/UserService'
import withAuth from '../../components/withAuth/withAuth'

const PaymentIndex = () => {
    const [paymentInfos, setPaymentInfos] = useState<IPaymentInfo[] | null>(null)
    const [userInfo, setUserInfo] = useState<IUserInfo | null>()

    const getPaymentInfos = async () => {
        const paymentInfos = await getPaymentService() as IPaymentInfo[]
        setPaymentInfos(paymentInfos)
    }

    const getUserInfo = async () => {
        const user = await getUserInfoService()
        if (user !== null) {
            setUserInfo(user)
        }
    }

    useEffect(() => {
        getUserInfo()
        getPaymentInfos()
    }, [])

    return (
        <div className={`${styles.paymentIndex}`}>
            <div className={`${styles.paymentInfo}`}>
                <PaymentInfo paymentsInfos={paymentInfos} />
            </div>

            <div className={`${styles.pointInfo}`}>
                <PointInfo paymentsInfos={paymentInfos} userInfo={userInfo} />
            </div>
        </div>
    )
}

export default withAuth(PaymentIndex)