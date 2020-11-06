import React from 'react'
import './Cointile.css'

const CoinTile = ({coin}) => {
    return (
        <div className='cointile' >
            <small>{coin.CoinName}</small>
    <small>{coin.Symbol}</small>
            
<span>
<img src={`https://www.cryptocompare.com/${coin.ImageUrl}`} />
</span>            
        </div>
    )
}

export default CoinTile
