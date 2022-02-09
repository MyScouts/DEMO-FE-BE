import PaymentInfo from '../../components/paymens/Payments/PaymentInfo'
import React from 'react'
import PointInfo from '../../components/paymens/Points/PointInfo'
import styles from './payment.module.scss'

const PaymentIndex = () => {
    return (
        <div className={`${styles.paymentIndex}`}>
            <PaymentInfo />
            <PointInfo />
        </div>
    )
}

export default PaymentIndex