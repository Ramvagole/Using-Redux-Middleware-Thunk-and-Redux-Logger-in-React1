
export function reducer(state={data:[]},action){

    switch(action.type){
        case "dataStore":
            return {...state,data:action.payload}
        default:
            return state
    }
}