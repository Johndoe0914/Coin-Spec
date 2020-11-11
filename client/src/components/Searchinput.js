
import React, {useState} from 'react';
import './Searchinput.css';


const Searchinput = ({filterCoins}) => {

    const handleSubmit = (e) =>{
        e.preventDefault();
        let inputValue = e.target.value;

        filterCoins(inputValue)
    } 

    return (
        <div className='search'>
            <form className='searchInput'  onKeyUp={(e) => handleSubmit(e)}>
                <label>Search all coins</label>
                <input type='text' name='search'/>
            </form>
        </div>
    )
}

export default Searchinput
