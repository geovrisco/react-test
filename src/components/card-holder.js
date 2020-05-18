import React from 'react';
import '../card.css'
import '../main.css'
import Card from './card.js'
import {useSelector} from 'react-redux'

export default props => {
    const heroes = useSelector(state => state.HeroesReducer.filtered)
    console.log(props)
    console.log(heroes,'ini filtered')
    return (
        <div className='hero-wrapper' data-testid='card-holder'>
            {heroes &&
                heroes.map((item) => {
                    return <Card key={item.id} data={item} cardAddItem={props.cardHolderAdd}> </Card>
                })
            }
            {!heroes &&
                props.data.map((item) => {
                    return <Card key={item.id} data={item} cardAddItem={props.cardHolderAdd}> </Card>
                })
            }          
            </div>
    )
}

// export default CardHolder