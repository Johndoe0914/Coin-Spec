import React,{useState, useEffect} from 'react'
import './Settings.css';
import CoinTile from '../components/Cointile';
import cc from 'cryptocompare';

cc.setApiKey('35182313c6fb8bb87ed11b82d9fe0033af059f5a46d9c038146861c22ca94df8')

 const Settings = () => {
    const [coinsList, setCoinsList] = useState([]);

    useEffect(() => {
        getCoins()
     // console.log(coinsList)
       }, [])

    const getCoins = async() => {
        let coins = (await cc.coinList()).Data
 
        let newCoins = Object.keys(coins).slice(0,96).map(i => coins[i])
     // console.log(newCoins)
        setCoinsList(newCoins)
     
       
     }

     const displayCoins = (coinsList) => {
        // console.log(coinsList)

        return coinsList.map((coin, i) =>  (<div key={i} onClick={(key) => addCoin(key)} className='coinGrid__coin'><CoinTile coin={coin}/></div>)
        )
    }

    const addCoin = key => {
   
        console.log('clicekd' ,key)
    }

    const removeCoin = key => {
        console.log('removed')
    }

    return (
        <div className='settings'>
            <h3>Welcome to CryptoDash, please select your favorite coins to begin.</h3>
        
            <h1>Confirm Favorites</h1>

      
            <div className='coinGrid'>
                {displayCoins(coinsList)}
            </div>
            {/* <CoinGrid />
           */}
        </div>
    )
}

export default Settings