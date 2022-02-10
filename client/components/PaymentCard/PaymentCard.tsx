import React from 'react'
import styles from './PaymentCard.module.scss'
import masterCardLogo from '../../public/assets/icons/ic_mastercard.png'
import visaLogo from '../../public/assets/icons/ic_visa.svg'
import Image from 'next/image'
import icChip from '../../public/assets/icons/ic_chip.png'
import { IPaymentInfo } from '../../reponsitory/UserService'
import { cc_format } from '../../utils/StringUtils'
import { useRouter } from 'next/router'
// 

interface IPaymentCardProps {
    paymentInfo: IPaymentInfo
}

const PaymentCard = (props: IPaymentCardProps) => {

    const router = useRouter();
    return (
        <div className={`${styles.paymentCardPage} ${props.paymentInfo.paymentMethod === 'visa' ? styles.visa : styles.masterCard}`}
            onClick={() => router.push({
                pathname: '/payment/' + props.paymentInfo._id,
                query: { data: JSON.stringify(props.paymentInfo) }
            })}
        >
            <div className={`${styles.paymentHeader}`}>
                <div>
                    <Image
                        src={props.paymentInfo.paymentMethod === 'visa' ? visaLogo : masterCardLogo}
                        objectFit="contain"
                        alt="payment logo"
                        layout="fill"
                    />
                </div>

                <div>
                    <Image
                        src={icChip}
                        objectFit="contain"
                        alt="icChip"
                        layout="fill"
                    />
                </div>


            </div>

            <div className={`${styles.paymentBody}`}>
                <p>{cc_format(props.paymentInfo.cardNumber)}</p>
            </div>

            <div className={`${styles.paymentFooter}`}>
                <div>
                    <p>Expire date</p>
                    <p>{props.paymentInfo.expiryDate}</p>
                </div>

                <div>
                    {props.paymentInfo.cvv}
                </div>
            </div>
        </div>
    )
}

export default PaymentCard