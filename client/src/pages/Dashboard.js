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
    
        
        
       prices = prices.filter(price => price.USD)
    //    console.log(prices)
       setPrices(prices)

       }

    useEffect(() => {
       let favcoins = JSON.parse(localStorage.getItem('cryptoDash'))
       setFavoriteCoins(favcoins)

        fetchPrices()

    }, [])

 

       const getPrices = async () => {
        let returnData = [];


        for(let i = 0; i < favoriteCoins.length; i++) {
            try {
                let priceData = await cc.priceFull(favoriteCoins[i].CoinSymbol, 'USD');
           
                returnData.push(priceData)
              
            } catch (e) {
                console.warn('fetch price error',e)
            }        
       }
      console.log(returnData)
       return returnData
    }
    
    return (
        <div className='dashboard'>
            <h1>dashboard</h1>
            
            <div className='dashboard__pricegrid'>
                <PriceGrid>
                {prices.map((price,index) => {
                  console.log(price.USD.price)
                })}
   
                </PriceGrid>
            </div>
    {/* <p>{JSON.stringify(favoriteCoins)}</p>
   */}
  {JSON.stringify(prices)}
        </div>
    )
}

export default Dashboard
