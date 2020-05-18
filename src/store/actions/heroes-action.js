

export const getHeroes = () => {
    console.log('ini dari action fetch')
    return async dispatch => {
        const res = await fetch("https://api.opendota.com/api/heroStats")
        const heroes = await res.json();
        // console.log(heroes)
        dispatch({
            type:"GET_HEROES",
            payload: {heroes: heroes, filtered:null}
        })
    }
}


export const getHero = (HeroesList,HeroID) => {
    return (dispatch) => {
        const heroz = HeroesList.filter(hero => {
            return hero.id === Number(HeroID)
        })
        // console.log(heroz)
            
        dispatch({
            type:"GET_HERO",
            payload: {hero:heroz}
        })
    }
}

export const filterHero = (heroArray,criteria) => {
    
    return (dispatch) => {
        const heroz = heroArray.filter(hero => {
            return hero.primary_attr === criteria
        })
        console.log(heroz)
        dispatch({
            type:"FILTER_HERO",
            payload: {filtered:heroz}
        })
    }
}


