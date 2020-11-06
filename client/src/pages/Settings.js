import React,{useState, useEffect} from 'react'
import './Settings.css';
import CoinTile from '../components/Cointile';
import _ from 'lodash';
import cc, { coinList } from 'cryptocompare';

cc.setApiKey('35182313c6fb8bb87ed11b82d9fe0033af059f5a46d9c038146861c22ca94df8')


const MAX_FAVORITES = 10;
 const Settings = () => {
    const [coinsList, setCoinsList] = useState([]);
    const [favoriteCoins, setFavoriteCoins] = useState([]);

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

        return coinsList.map((coin, i) =>  (<div key={i} data-name={coin.CoinName} data-symbol={coin.Symbol} data-img={coin.ImageUrl} onClick={e => addCoin(e)} className='coinGrid__coin'><CoinTile coin={coin}/></div>)
        )
    }
    const displayFavoriteCoins = favoriteCoins => {

        return favoriteCoins.map((coin, i) =>  (<div key={coin.Id} data-name={coin.CoinName} onClick={e => removeCoin(e)} className='coinGrid__coin'><CoinTile coin={coin}/></div>))
      }
  

    const addCoin = e => {

        let favCoinName = e.currentTarget.dataset.name;
        let favCoinSymbol = e.currentTarget.dataset.symbol;
        let favCoinImage = e.currentTarget.dataset.img

    
        let favorites = [...favoriteCoins]

        if(favorites.length < MAX_FAVORITES) {
        favorites.unshift({CoinName: favCoinName, CoinSymbol: favCoinSymbol, CoinImage:favCoinImage })
                setFavoriteCoins([...favorites])
                console.log(coinsList)
                console.log(favoriteCoins)
        }

    }

    const removeCoin = e => {
        const favorites = [...favoriteCoins];
        const newfav = _.pull(favorites, e.currentTarget.dataset.name)
        setFavoriteCoins([...newfav])
        console.log('removed')
    }

    return (
        <div className='settings'>
            <h3>Welcome to CryptoDash, please select your favorite coins to begin.</h3>
           <span className='coinGrid'>
           {displayFavoriteCoins(favoriteCoins)}
           </span>
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