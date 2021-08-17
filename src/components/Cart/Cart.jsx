import React from 'react'
import { inventory } from '../../Data'

const Cart = () => {
    return (
        <div className='cart'>
            <h1 className='cart__heading'>Cart Items</h1>
            <div className='cart__items'>
                <div className='cart__details'>
                    {/* {Object.entries(inventory).map()} */}
                    <div className='cart__description'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
