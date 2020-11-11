import React,{useState, useEffect} from 'react'
import './Settings.css';
import CoinTile from '../components/Cointile';
import _ from 'lodash';
import cc, { } from 'cryptocompare';
import SearchInput from '../components/Searchinput';
import fuzzy from 'fuzzy';

cc.setApiKey('35182313c6fb8bb87ed11b82d9fe0033af059f5a46d9c038146861c22ca94df8')


const MAX_FAVORITES = 10;
 const Settings = () => {
    const [coinsList, setCoinsList] = useState([]);
    const [favoriteCoins, setFavoriteCoins] = useState([]);
    const [filteredCoins, setFilteredCoins] = useState([]);

    useEffect(() => {
        getCoins()
     // console.log(coinsList)
       }, [])

    const getCoins = async() => {
        let coins = (await cc.coinList()).Data
 
        let newCoins = Object.keys(coins).map(i => coins[i])
     // console.log(newCoins)
        setCoinsList(newCoins)
     
       
     }

     const displayCoins = (coinsList) => {
        // console.log(coinsList)

        return coinsList.slice(0,96).map((coin, i) =>  (<div key={i} data-name={coin.CoinName} data-symbol={coin.Symbol} data-img={coin.ImageUrl} onClick={e => addCoin(e)} className='coinGrid__coin addCoin'><CoinTile coin={coin}/></div>)
        )
    }
    const displayFavoriteCoins = favoriteCoins => {
        

        return favoriteCoins.map((coin, i) =>  (<div key={i} data-id={i} data-name={coin.CoinName}  data-symbol={coin.Symbol} data-img={coin.ImageUrl} onClick={(e, i)=> removeCoin(e, i)} className='coinGrid__coin removeCoin'><CoinTile coin={coin}/></div>))
      }

      const displayFilteredCoins = (filteredCoins) => {

        let filtcoin = Object.keys(filteredCoins).slice(0,96).map(i => filteredCoins[i])

        return filtcoin.map((coin, i) =>  (<div key={i} data-name={coin.CoinName} data-symbol={coin.Symbol} data-img={coin.ImageUrl} onClick={e => addCoin(e)} className='coinGrid__coin addCoin'><CoinTile coin={coin}/></div>))
      }
  

    const addCoin = e => {

        let favCoinName = e.currentTarget.dataset.name;
        let favCoinSymbol = e.currentTarget.dataset.symbol;
        let favCoinImage = e.currentTarget.dataset.img


    
        let favorites = [...favoriteCoins]

        if(favorites.length < MAX_FAVORITES) {
            let newItem = {CoinName: favCoinName, CoinSymbol: favCoinSymbol, ImageUrl:favCoinImage};
            console.log(newItem)
            
        favorites.unshift(newItem)
                setFavoriteCoins([...favorites])
                console.log(coinsList)
                // console.log(coinsList)
                // console.log(favoriteCoins)
        }

    }

    // const finditem = (array, item) => {
    //     return array.
    // }

    const removeCoin = (e,i) => {

        let coinindex= e.currentTarget.dataset.id

      

        console.log()
        console.log(e,'event')
        const favorites = [...favoriteCoins];
       
       
        
        favorites.splice(coinindex, 1)
        // const newfav = _.pullAll(favorites, coinID)
        setFavoriteCoins([...favorites])
        console.log('removed')
    }


    const filterCoins = (input) => {
        //Get list of coin symbols
        let coinSymbols = Object.keys(coinsList);
        //Get all the coin names and map symbol to name
        let coinNames = coinSymbols.map(sym => coinsList[sym].CoinName);
        let allStringsToSearch = coinSymbols.concat(coinNames);
   

        let fuzzyResults = fuzzy
                .filter(input, allStringsToSearch, {})
                .map(result => result.string)

                let filteredCoins = _.pickBy(coinsList, (result, symKey) => {
                    let coinName = result.CoinName;

                    return (_.includes(fuzzyResults, symKey) || _.includes(fuzzyResults, coinName))

                })


        setFilteredCoins(filteredCoins)

    }
    return (
        <div className='settings'>
            <h3>Welcome to CryptoDash, please select your favorite coins to begin.</h3>
           <span className='coinGrid'>
           {displayFavoriteCoins(favoriteCoins)}
           </span>
           <span>
               <SearchInput filterCoins={filterCoins} />
           </span>
            <h1>Confirm Favorites</h1>

      
            <div className='coinGrid'>
               {filteredCoins == '' ? (displayCoins(coinsList)) :  (displayFilteredCoins(filteredCoins))}
                
            </div>
            {/* <CoinGrid />
           */}
        </div>
    )
}

export default Settings