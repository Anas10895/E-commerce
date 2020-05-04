
const initalValue = {
    curentUser:null
}

const userreducer = (state = initalValue , action) => {
    switch(action.type) {
        case 'Set-Current-User':
            return {
                ...state , 
                curentUser: action.payload
            }

        default: return state

    }

}

export default userreducer;