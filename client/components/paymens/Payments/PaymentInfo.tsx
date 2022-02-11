import PaymentCard from '../../../components/PaymentCard/PaymentCard'
import React, { useEffect, useState } from 'react'
import styles from './PaymentInfo.module.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Avatar, Box, Button } from "@mui/material";
import AddCircle from '@mui/icons-material/AddCircle';
import { useRouter } from 'next/router';
import { IPaymentHistory, IPaymentInfo, userPaymentHistoryService } from '../../../reponsitory/UserService';
import PaymentHistory from '../../../components/PaymentHistory/PaymentHistory';

// 

interface IPaymentInfoProps {
  paymentsInfos: IPaymentInfo[] | null | undefined
}

const PaymentInfo = (props: IPaymentInfoProps) => {
  const router = useRouter();

  return (
    <div className={`${styles.paymentInfo}`}>
      <div className='information'>
        <div className={`${styles.infoHeader}`}>
          <h2>Your Credit Card</h2>
          <div className={`${styles.addButton}`} onClick={() => router.push('payment/create')}>
            <AddCircle sx={{
              fontSize: '30px'
            }} />
          </div>
        </div>
        <div className={`${styles.paymentCards}`}>
          {
            props.paymentsInfos && props.paymentsInfos.length > 1 ?
              <Carousel
                showThumbs={false}
                centerMode={true}
                showArrows={false}
                showIndicators={false}
                emulateTouch={true}
                className={`${styles.paymentCards}`}
                width={'800px'}
                infiniteLoop={true}
              >
                {props.paymentsInfos.map((paymentInfo, index) => <PaymentCard key={index} paymentInfo={paymentInfo} />)}
              </Carousel>
              :
              props.paymentsInfos && props.paymentsInfos.length === 1 ?
                <PaymentCard paymentInfo={props.paymentsInfos[0]} />
                :
                <div className={`${styles.noPayment}`}>
                  <p>You have no payment information</p>
                </div>
          }
        </div>
      </div>

      <div className='information'>
        <h2>Recent Payment</h2>
        <div className={`${styles.paymentCards}`}>
          <PaymentHistory />
        </div>
      </div>
    </div>
  )
}

export default PaymentInfo