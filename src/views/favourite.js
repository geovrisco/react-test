import React from 'react'
import CardHolder from '../components/card-holder'
import {useSelector} from 'react-redux'
import DetailCard from '../components/detail-card'

function Favourite (){
    const favourite = useSelector(state => state.FavouriteReducer.favourite)
    // console.log(favourite)
    return(
        <div data-testid='favourite-page'>
            <div className="favourite-holder">
                {favourite.length >0 &&
                    favourite.map(hero=>{
                        return (
                            <DetailCard hero={hero}></DetailCard>
                        )
                    })
                }
            {
                favourite.length<=0 &&
                <h1>No Favourite Yet :(</h1>
            } 
            </div>
        </div>
        

    )
}

export default Favourite