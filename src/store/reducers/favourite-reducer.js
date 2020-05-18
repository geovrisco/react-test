
const defaultState = {
    favourite: []
}

const Favouritereducer = (state = defaultState, action)=> {
    switch(action.type){
        case 'ADD_FAVOURITE':
            // console.log(action,'ini action')
            let newFavourite  = state.favourite.concat(action.payload)
            // console.log(newFavourite, 'blm di delete')
            return {...state, favourite:newFavourite}
        
        case 'REMOVE_FAVOURITE':
            const deletedFave = state.favourite.filter(ele =>{
                return ele.id !== action.payload.id 
            })
            // console.log(deletedFave ,'ini sudah di delete')
            return{...state, favourite:deletedFave}
        
        default:
            return state
    }
}

export default Favouritereducer