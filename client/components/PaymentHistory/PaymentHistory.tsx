import React, { useEffect, useState } from 'react'
import { IPaymentHistory, userPaymentHistoryService } from '../../reponsitory/UserService'
import Check from '@mui/icons-material/Check';
import Error from '@mui/icons-material/Error';
import ReactPaginate from 'react-paginate';
import 'bootstrap/dist/css/bootstrap.min.css';
import { cc_format } from '../../utils/StringUtils';

const PaymentHistory = () => {
    const [paymentHistories, setPaymentHistories] = useState<IPaymentHistory[] | null>()
    const [pageInfo, setPageInfo] = useState<any>()
    const getPaymentHistory = async () => {
        const paymentHistory = await userPaymentHistoryService()
        setPaymentHistories(paymentHistory?.items)
        setPageInfo({
            page: paymentHistory?.currentPage,
            pageSize: paymentHistory?.pageCount,
        })
    }
    useEffect(() => {
        getPaymentHistory();
    }, [])

    const handlePageClick = async (selectedItem: { selected: number }) => {
        const paymentHistory = await userPaymentHistoryService(selectedItem.selected + 1)
        setPaymentHistories(paymentHistory?.items)
    }

    return (
        <div style={{ width: "100%" }}>
            <table className='payment-histories-table'>
                <thead>
                    <th>TIME</th>
                    <th>METHOD</th>
                    <th>CONTENT</th>
                    <th>POINT</th>
                    <th>COIN</th>
                    <th>STATUS</th>
                </thead>
                <tbody>
                    {
                        paymentHistories && paymentHistories.length > 0
                            ? paymentHistories.map((paymentHistory, index) => {
                                return (
                                    <tr key={index}>
                                        <td className='history-created'>{paymentHistory.createdAt}</td>
                                        <td style={{ textAlign: "center" }}>{cc_format(paymentHistory.payment?.cardNumber ?? "")} {paymentHistory.payment?.paymentMethod}</td>
                                        <td>{paymentHistory.content}</td>
                                        <td style={{ textAlign: "center" }}>{paymentHistory.point}</td>
                                        <td style={{ textAlign: "center" }}>{paymentHistory.coin}</td>
                                        <td style={{ textAlign: "center" }}>
                                            {paymentHistory.status === 'success'
                                                ? <Check color={'success'} />
                                                : <Error color={'error'} />}
                                        </td>
                                    </tr>
                                )
                            })
                            : <tr>
                                <td colSpan={6}>No payment history</td>
                            </tr>
                    }
                </tbody>
            </table>

            <div className='payments-pagination'>
                {
                    pageInfo && pageInfo.pageSize > 1 &&
                    <ReactPaginate
                        breakLabel="..."
                        // nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageInfo.pageSize}
                        // previousLabel="< previous"
                        // renderOnZeroPageCount={null}
                        marginPagesDisplayed={2}
                        previousLabel={<>&laquo;</>}
                        nextLabel={<>&raquo;</>}
                    />
                }
            </div>
        </div>
    )
}

export default PaymentHistory