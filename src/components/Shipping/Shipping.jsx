import React from 'react'
import { useRecoilState } from 'recoil'
import { destinations } from '../../Data'
import { shippingState } from '../../store'
import './Shipping.css'

const Shipping = () => {
    const [shippingCountry, setShippingCountry] = useRecoilState(shippingState)

    return (
        <div className='shipping'>
            <h1 className='shipping__heading'>Shipping Options</h1>
            <div className='shipping__destination'>
                {Object.entries(destinations).map(([country, price]) => (
                    <button className='shipping__btn' 
                    onClick={() => setShippingCountry(country)}>
                        {country} @ {price}
                        {shippingCountry === country ? " 🚚" : null}
                    </button>
    ))}
            </div>
        </div>
    )
}

export default Shipping
