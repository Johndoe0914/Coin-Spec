import React,{useState, useEffect} from 'react'
import './Settings.css';
import CoinGrid from '../components/Coingrid';

 const Settings = () => {

    return (
        <div className='settings'>
            <h3>Welcome to CryptoDash, please select your favorite coins to begin.</h3>
        
            <h1>Confirm Favorites</h1>

             <div className='settings__coins'>
    
            <CoinGrid />
            </div>
        </div>
    )
}

export default Settings