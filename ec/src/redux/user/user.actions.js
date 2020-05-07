import {UserAcionType} from './User-type'

export const setCurrentUser = user => ({
    type:UserAcionType.Set_Current_User,
    payload: user,
    
})