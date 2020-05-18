
import React from 'react'
import '../card.css'
import '../main.css'
import HeroComp from './hero-comp'

export default props => {
    // console.log(props,'=================================')
    return (
        <div className="team-list">
            {props.data &&
                (
                    props.data.map((item)=>{
                        return(
                            <HeroComp key={item.id} hero={item} heroDelete={props.teamDelete} favourite={props.favourite}></HeroComp>
                        )
                    })
                )
            }
            {props.data.length>4 && props.teamDelete &&
                (
                    <button className="btn" onClick={()=>alert('coming soon, ga sempat bang! :(')}> Analyze ! </button>
                )
            }
        </div>
    )
}