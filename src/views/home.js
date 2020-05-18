import React from 'react';
import {useEffect} from 'react'
import CardHolder from '../components/card-holder.js'
import TeamComp from '../components/team-comp.js'
import useFetch from '../hooks/useFetch'
import useAddTeam from '../hooks/useAddTeam'
// import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { getHeroes } from '../store/actions/heroes-action'
import {useSelector, useDispatch} from 'react-redux'

function Home (){
    const {teamList ,functAddTeam, functRemoveTeam} = useAddTeam([])

    const favourite = useSelector(state => state.FavouriteReducer.favourite)
    const history = useHistory()

    const dispatch = useDispatch()
    const heroes = useSelector(state => state.HeroesReducer.heroes)
    console.log('ini di home')
    
    function goToFave(){
        history.push("/favourite")
    }

    function getHeroList(){
        dispatch(getHeroes())
    }
    
    useEffect(()=>{
        dispatch(getHeroes())
    },[])
    
    // console.log(heroes,'ini heroess')

    return (
        <>
                <div className="container" data-testid='home-indicator'>
                    <div className="left blue trajan">
        
                    <div className="below-left">
                        <span className="trajan top2">Team List</span>
                        <TeamComp data={teamList} teamDelete={functRemoveTeam}></TeamComp>
                    </div>
                    </div> 
                    
                    <div className="right">
                        <h1><span id='cardHolder' className="s40 trajan blue" onClick={()=>getHeroList()} >Hero Lists</span></h1>
                        {
                            <CardHolder data={heroes} cardHolderAdd={functAddTeam}> </CardHolder>
                        }
                    </div>
                    <div className="left blue trajan">
        
                    <div className="below-left">
                        <span data-testid='btn-fave' className="trajan top2 fave" onClick={()=>goToFave()}>Favourite Heroes! :</span>
                        <TeamComp data={favourite} favourite={true} ></TeamComp>
                    </div>
                    </div> 
                </div>
        </>
    )
}

export default Home