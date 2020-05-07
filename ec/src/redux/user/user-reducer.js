import {UserAcionType} from './User-type'
const initalValue = {
    curentUser:null
}

const userreducer = (state = initalValue , action) => {
    switch(action.type) {
        case UserAcionType.Set_Current_User:
            return {
                ...state , 
                currentUser: action.payload
            }

        default: return state

    }

}

export default userreducer;