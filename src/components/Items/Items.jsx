import React from 'react'
import { inventory } from '../../Data'
import './Items.css'

const Items = () => {
    return (
        <div className='items'>
            <h1 className='items__heading'>Available Items in Inventory</h1>
            
            <div className='items__list'>
                {Object.entries(inventory).map(([key, {name, price}]) => (
                    <div className='items__details' key={key}>
                        <div>
                            {name} @ <strong>${price.toFixed(2)}</strong>
                        </div>
                        <div className='items__btns'>
                            <button className='items__addBtn'>
                                Add
                            </button>
                            <button className='items__remBtn'>
                                Remove
                            </button>
                        </div>
                    </div>
                    
                ))}
            </div>
        </div>
    )
}

export default Items
