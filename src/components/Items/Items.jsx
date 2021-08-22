import React from 'react'
import { inventory } from '../../Data'
import './Items.css'
import { useRecoilState } from 'recoil'
import { cartState } from '../../store'

const Items = () => {

    const [cart, setCart] = useRecoilState(cartState)

    return (
        <div>
            <div className='items'>
                <h1 className='items__heading'>Inventory</h1>
                {/* <pre>{JSON.stringify(cart)}</pre> */}
                
                <div className='items__list'>
                    {Object.entries(inventory).map(([key, {name, price}]) => (
                        <div className='items__details' key={key}>
                            <div className='items__description'>
                                {name}&nbsp; <span style={{ 'color': 'royalBlue' }}>@</span> &nbsp;${price.toFixed(2)}
                            </div>
                            <div className='items__btns'>
                                <button className='items__addBtn'
                                onClick={() => setCart({...cart, [key]: (cart[key] || 0) + 1})}
                                >
                                    Add
                                </button>
                                {cart[key] ?
                                <button className='items__remBtn'
                                onClick={() => setCart({...cart, [key]: cart[key] - 1})}
                                >
                                    Remove
                                </button> : ""
                            }
                            </div>
                        </div>
                        
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Items
