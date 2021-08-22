import React from 'react'
import { useRecoilState } from 'recoil'
import { destinations } from '../../Data'

const Invoice = () => {
    // const [dest, setDest] = useRecoilState(destinations)

    return (
        <div>
            <h2>Invoice</h2>
            <div>
                {Object.entries(destinations).map(([country, price]) => (
                    <button>
                        {country} @ {price}
                    </button>
    ))}
            </div>
        </div>
    )
}

export default Invoice
