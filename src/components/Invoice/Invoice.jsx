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
                <span>Shipping :  {invoiceObj.shippingTotal.toFixed(2)}</span>
                <span>SubTotal : {invoiceObj.cartTotal.toFixed(2)}</span>
                <span><strong>Total : &nbsp;&nbsp;&nbsp;{invoiceObj.total.toFixed(2)}</strong></span>
            </div>
        </div>
    )
}

export default Invoice
