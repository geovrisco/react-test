
import React, {useState, useEffect} from 'react';
import '../card.css'
import '../main.css'
import {
    useDispatch
    } from 'react-redux'

    
    export default (props) => { 
    const dispatch = useDispatch()
    // console.log(props.hero,'ini hero')
    const rmvFavourite = (hero)=>{
        // console.log(hero, 'ini hero')
        dispatch({
            type:'REMOVE_FAVOURITE',
            payload: hero
        })
    }


    let imageUrl = `https://api.opendota.com${props.hero.icon}`
    return(
        <>
            <img src={imageUrl} className="icon"></img>
            <div className="name-container">
                <span className="trajan yellow">{props.hero.localized_name}</span>
                { props.heroDelete &&
                    <span className="cross" onClick={() => props.heroDelete(props.hero)}> ✘ </span>
                }
                {
                    props.favourite && 
                    <span className="cross" onClick={() => rmvFavourite(props.hero)}> ✘ </span>
                }
            </div>
        </>
    )
}