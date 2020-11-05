import React,{ useState, useEffect} from 'react'
import cc, { coinList } from 'cryptocompare';
import Cointile from './Cointile';
import './Coingrid.css';
import CoinTile from './Cointile';


cc.setApiKey('35182313c6fb8bb87ed11b82d9fe0033af059f5a46d9c038146861c22ca94df8')


const Coingrid = () => {
    const [coinsList, setCoinsList] = useState([]);


    const getCoins = async() => {
       let coins = (await cc.coinList()).Data

       let newCoins = Object.keys(coins).slice(0,96).map(i => coins[i])
    // console.log(newCoins)
       setCoinsList(newCoins)
    
      
    }

    const displayCoins = (coinsList) => {
        console.log(coinsList)

        return coinsList.map((coin, i) =>  (<div key={i} className='coinGrid__coin'><CoinTile coin={coin}/></div>)
        )
    }

  useEffect(() => {
   getCoins()
console.log(coinsList)
  }, [])
  
    return (

      <div className='coingrid'>
          {displayCoins(coinsList)}
      </div>
       
    )
}

export default Coingrid
