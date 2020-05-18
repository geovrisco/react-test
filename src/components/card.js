import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux'
import '../card.css'
import '../main.css'
// import store from '../store'
import {
useDispatch
} from 'react-redux'

import { filterHero } from '../store/actions/heroes-action'

import {Link} from 'react-router-dom'

export default props=>{

    let imageUrl = `https://api.opendota.com${props.data.img}`
    let statCard =`card-body-${props.data.primary_attr}`
    let status = `fs25 trajan ${props.data.primary_attr}`
    let testid = `heroes-picture${props.data.id}`
    const heroArray = useSelector(state => state.HeroesReducer.heroes)
    
    const dispatch = useDispatch()
    
    const addFavourite = (hero)=>{
        // console.log(hero, 'ini hero')
        dispatch({
            type:'ADD_FAVOURITE',
            payload: hero
        })
    }
    
    const filterHeroes =(criteria)=>{
        dispatch(filterHero(heroArray,criteria))
    }



    return (
        <div className={statCard} data-testid={testid}>
            <span> 
                <Link to={`/hero/${props.data.id}`} className="heroes-name" data-testid='heros-name'>
                    {props.data.localized_name} 
                </Link>
            </span>
            <img src={imageUrl} data-testid=''></img>
            <span data-testid='heroes-attribute' className={status} onClick={() => filterHeroes(props.data.primary_attr)} > {props.data.primary_attr==='agi'? 'Agility': ''}{props.data.primary_attr==='str'? 'Strength': ''}{props.data.primary_attr==='int'? 'Inteligence': ''}   </span>
            <div className="card-stats" data-testid='heroes-stats'>
                    {
                        props.data.roles.map((role,index) =>{
                            return <span key={index} className={role}>{role}</span>
                        })
                    }

            </div>
            <div className="card-stats">
                <button  className="btn2" onClick={()=> props.cardAddItem(props.data)} > Team List </button>
                <button className="btn2" onClick={()=>addFavourite(props.data) }> Faves </button>
            </div>
        </div>
    )
    
}