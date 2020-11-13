import React, {useEffect} from 'react'
import './Pricetile';

const PriceTile = ({price}) => {
   
useEffect(() => {
    
console.log(price)
})

    return (
        <div className='pricetile'>
            {price.PRICE}
        </div>
    )
}

export default PriceTile
