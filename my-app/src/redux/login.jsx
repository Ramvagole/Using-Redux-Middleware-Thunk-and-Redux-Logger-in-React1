
export function login(state={},action){
    switch(action.type){
        case "Name":
            return {...state,email:action.payload}
        case "Password":
            return {...state,password:action.payload}
        default:
            return state
    }

}