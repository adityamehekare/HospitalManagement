import React from 'react';
import '../CSS/Header.css';

export const Header =(props)=>{
    return(
        <div id="navbar">
            <h1>{props.title}</h1> 
        </div>
    )
}