import React from 'react'
import './Cointile.css'

const CoinTile = ({coin}) => {
    return (
        <div className='cointile'>
            <small>{coin.CoinName}</small>

            
<span>
<img src={`http://cryptocompare.com/${coin.ImageUrl}`} />
</span>            
        </div>
    )
}

export default CoinTile
