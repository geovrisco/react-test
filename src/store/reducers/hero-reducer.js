const initialState ={
    heroes:[],
    hero:[],
    filtered:null
}

const heroesListReducer = (state = initialState, action) => {
    // console.log(action.payload, 'ini payload')
    switch(action.type){
        case "GET_HEROES":
            return {...state, heroes: action.payload.heroes, filtered:null}

        case "GET_HERO":
            return {...state, hero: action.payload.hero}

        case "FILTER_HERO":
            return {...state, filtered: action.payload.filtered}

        default:
            return state
    }
}


export default heroesListReducer