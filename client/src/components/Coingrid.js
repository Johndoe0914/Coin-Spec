import React,{ useState, useEffect} from 'react'
import cc, { coinList } from 'cryptocompare';
import './Coingrid.css';

cc.setApiKey('35182313c6fb8bb87ed11b82d9fe0033af059f5a46d9c038146861c22ca94df8')


const Coingrid = () => {
    const [coinsList, setCoinsList] = useState([]);


    const getCoins = async() => {
       let coins = (await cc.coinList()).Data

       setCoinsList(coins)
       console.log(coins)
     
    }


    const coinsToDisplay = coinsList => {
        return Object.keys(coinsList).slice(0,96)
    }
  useEffect(() => {
   getCoins()
  }, [])
    return (
        <div className='coingrid'>
                 {coinsToDisplay(coinsList).map(coinKey => <div className='coinGrid__coin'>{coinKey}</div>)}
        </div>
    )
}

export default Coingrid
