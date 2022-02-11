import React from 'react'
import styles from './PointInfo.module.scss'
import icCoin from '../../../public/assets/icons/ic_coin.png'
import icPoint from '../../../public/assets/icons/ic_point.png'
import Image from 'next/image'
import ModalChangePoint from '../../../components/ModalChanegPoin/ModalChangePoint'
import { IPaymentInfo, IUserInfo } from '../../../reponsitory/UserService'
import ModalChaneCoin from '../../../components/ModalChanegPoin/ModalChaneCoin'
import ArrowForward from '@mui/icons-material/ArrowForward';
import { alterFail } from '../../../reponsitory/AltertService'
import ModalCoinToPoint from '../../../components/ModalChanegPoin/ModalCoinToPoint'
import Withdrawal from '../../../components/ModalChanegPoin/Withdrawal'

interface IPointInfoProps {
    paymentsInfos: IPaymentInfo[] | null | undefined,
    userInfo: IUserInfo | null | undefined
}

// 
const PointInfo = (props: IPointInfoProps) => {
    const [open, setOpen] = React.useState(false);
    const [openCoin, setOpenCoin] = React.useState(false);
    const [coinPoint, setCoinPoint] = React.useState(false);
    const [withdrwal, setWithdrwal] = React.useState(false);

    const handleClose = () => setOpen(false);
    const handleCloseCoin = () => setOpenCoin(false);
    const handleCloseCoinPoint = () => setCoinPoint(false);
    const handleCloseWithdrawal = () => setWithdrwal(false);

    const handleOpen = () => {
        if (props.paymentsInfos === null || props.paymentsInfos !== undefined && props.paymentsInfos?.length <= 0) {
            alterFail("Bạn chưa có thông tin thanh toán, vui lòng thêm thông tin thanh toán")
            return;
        }
        setOpen(true)
    };

    const handleOpenCoin = () => {
        if (props.userInfo) {
            if (props.userInfo?.pointTotal >= 11) {
                setOpenCoin(true)
                return;
            }
        }
        alterFail('Bạn không đủ điểm để mua coin, vui lòng nạp thêm điểm để tiếp tục mua')
    };

    const handleOpenCoinPoint = () => {
        if (props.userInfo) {
            if (props.userInfo?.coinTotal >= 1) {
                setCoinPoint(true)
                return;
            }
        }
        alterFail('Bạn không đủ coin để mua điểm, vui lòng nạp thêm coin để tiếp tục mua')
    };

    const handleOpenWithdrawal = () => {
        if (props.userInfo) {
            if (props.userInfo?.pointTotal > 0) {
                setWithdrwal(true)
                return;
            }
        }
        alterFail('Bạn không đủ coin để mua điểm, vui lòng nạp thêm coin để tiếp tục mua')
    };

    return (
        <div className={`${styles.pointInfoPage}`}>
            <div className={`${styles.pointInfos}`}>
                <div className={`${styles.pointHeader}`}>
                    <h1>YOUR COIN</h1>
                    <div>
                        <p >You have</p>
                        <div className={`${styles.coinWrapper}`} >
                            <div className={`${styles.imgCoin}`}>
                                <Image src={icCoin} alt="coin" objectFit='contain' layout='fill' className={`${styles.icCoin}`} />
                            </div>
                            <p>{props.userInfo?.coinTotal ?? 0}</p>
                        </div>
                    </div>
                </div>

                <div className={`${styles.pointHeader}`}>
                    <h1>YOUR POINT</h1>
                    <div>
                        <p >You have</p>
                        <div className={`${styles.coinWrapper}`} >
                            <div className={`${styles.imgCoin}`}>
                                <Image src={icPoint} alt="coin" objectFit='contain' layout='fill' className={`${styles.icCoin}`} />
                            </div>
                            <p>{props.userInfo?.pointTotal ?? 0}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles.pointInfos}`}>
                <div className={`${styles.pointActions}`}>
                    <div onClick={handleOpenCoin}>
                        Point <ArrowForward /> Coin
                    </div>

                    <div onClick={handleOpenCoinPoint}>
                        Coin <ArrowForward /> Point
                    </div>

                    <div onClick={handleOpen}>
                        Add Money
                    </div>
                    <div onClick={handleOpenWithdrawal}>
                        Withdrawal
                    </div>

                </div>
            </div>


            <ModalChangePoint handleClose={handleClose} open={open} paymentsInfos={props.paymentsInfos} />
            <ModalChaneCoin handleClose={handleCloseCoin} open={openCoin} totalPoint={props.userInfo?.pointTotal ?? 0} />
            <ModalCoinToPoint handleClose={handleClose} open={coinPoint} totalCoin={props.userInfo?.coinTotal ?? 0} />
            <Withdrawal handleClose={handleCloseWithdrawal} open={withdrwal} totalPoint={props.userInfo?.pointTotal ?? 0} paymentsInfos={props.paymentsInfos} />
        </div>
    )
}

export default PointInfo