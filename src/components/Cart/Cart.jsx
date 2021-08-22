import React from 'react'
import { inventory } from '../../Data'
import { useRecoilValue } from 'recoil'
import { cartState } from '../../store'
import './Cart.css'

const Cart = () => {
    const cart = useRecoilValue(cartState)
    return (
        <div className='cart'>
            <h1 className='cart__heading'>Cart Items</h1>
            <div className='cart__items'>
                {/* {Object.entries(cart).length === 0 ? <h3>No Items available in the Cart.</h3> : null} */}
                        <div className='cart__details'>
                            {Object.entries(cart).map(([key, quantity]) => (
                                <>
                                    {quantity ? <div key={key} className='cart__item'><h4>{inventory[key].name}</h4><span>x</span> <p>{quantity}</p></div> : null}
                                </>
                            ))}
                        </div>  
                
            </div>
            
        </div>
    )
}

export default Cart
