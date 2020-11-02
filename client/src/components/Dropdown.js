import React, { useState } from 'react'
import './Dropdown.css'

const Dropdown = () => {
    const [clicked, setClicked] = useState(false);

    return (
        <div  className='dropdown' style={clicked ? {marginTop:"63px"} : null}>
            <span  onClick={() => {clicked ? setClicked(false) : setClicked(true)}}>Johndoe0914</span>


          
           {clicked ?  <ul className='dropdown__items' >
                <li>Saved Currencies</li>
                <li>Settings</li>
                <li>Logout</li>
            </ul>: null}
           
        
            

         
        </div>
    )
}

export default Dropdown
