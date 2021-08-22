import React from 'react'
import { useRecoilValue } from 'recoil'
import { invoiceTotal } from '../../store'
import './Invoice.css'

const Invoice = () => {
    const invoiceObj = useRecoilValue(invoiceTotal)
    return (
        <div className='invoice'>
            <h1 className='invoice__heading'>Invoice Detail</h1>
            <div className='invoice__category'>
                <span>Shipping Total : {invoiceObj.shippingTotal}</span>
                <span>Cart Total : {invoiceObj.cartTotal}</span>
                <span><strong>Total : {invoiceObj.total}</strong></span>
            </div>
        </div>
    )
}

export default Invoice
