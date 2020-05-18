import React from 'react';
import {useParams} from 'react-router-dom'
import DetailCard from '../components/detail-card'
import {useEffect, useState} from 'react'
import { getHero } from '../store/actions/heroes-action';
import {useDispatch,useSelector} from 'react-redux'


function Hero (){
    const { heroId } = useParams()

    const dispatch = useDispatch()
    const heroes = useSelector(state => state.HeroesReducer.heroes)
    
    useEffect(()=>{
        dispatch(getHero(heroes,heroId))
    },[])
    const hero = useSelector(state => state.HeroesReducer.hero)
    // console.log(heroW,'ini hero')
    
    return (
        <div className="container" data-testid='hero-indicator'>
            {
                hero[0] && 
                <>
                    <div>
                        <span> {hero[0].localized_name} </span>
                    </div>
                    <div>
                        <DetailCard hero={hero[0]} uyu={"uyu"}> </DetailCard>
                    </div>
                </>
            }

            </div>
        
    )
}

export default Hero