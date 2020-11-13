import React, {useState, useEffect} from 'react';
import PriceGrid from '../components/Pricegrid';
import Pricetile from '../components/Pricetile';
import cc from 'cryptocompare';
import '../pages/Dashboard.css'

cc.setApiKey('35182313c6fb8bb87ed11b82d9fe0033af059f5a46d9c038146861c22ca94df8')

const Dashboard = () => { 
    const [favoriteCoins, setFavoriteCoins] = useState([])
    const [prices, setPrices] = useState([])

    const fetchPrices = async() => {
        let prices = await getPrices();

        prices = prices.filter(price => Object.keys(price).length)
        console.log(prices)
        setPrices(prices)

       }

    useEffect(() => {
       let favcoins = JSON.parse(localStorage.getItem('cryptoDash'))
  
       setFavoriteCoins(favcoins)

        fetchPrices()
        console.log(prices)
    }, [])

 

       const getPrices = async () => {
        let returnData = [];

        // try{
        //     let priceData = await cc.priceFull(favoriteCoins[0], 'USD');


        //     returnData.push(priceData)
        // } catch(e) {
        //     console.log(e)
        // }

        for(let i = 0; i < favoriteCoins.length; i++) {
            try {
                let priceData = await cc.priceFull(favoriteCoins[i].CoinSymbol, 'USD');
           
                returnData.push(priceData)
              
            } catch (e) {
                console.warn('fetch price error',e)
            }        
       }
      
       return returnData
    }
    return (
        <div className='dashboard'>
            <h1>dashboard</h1>
            
            <div className='dashboard__pricegrid'>
                <PriceGrid>
                {prices && (prices.map(price => {
                   <Pricetile price={price} />
                }))}
   
                </PriceGrid>
            </div>
    {/* <p>{JSON.stringify(favoriteCoins)}</p>
   */}
    {/* {!prices === '' ?  <h2>loading prices</h2>: (JSON.stringify(prices)) } */}
        </div>
    )
}

export default Dashboard
