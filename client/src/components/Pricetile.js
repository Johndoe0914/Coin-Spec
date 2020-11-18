import React, {useEffect} from 'react'
import './Pricetile';

const PriceTile = ({price, index}) => {

    
   
useEffect(() => {
    
console.log(price)
})

    return (
        <div className='pricetile'>
            {price.price[0]['USD'].PRICE}
        </div>
    )
}

export default PriceTile
