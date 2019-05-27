import getType from '../main/actionTypes'

const userKey = '_mymoney_user'
const { tokenValidated, userFetched } = getType()
const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem(userKey)),
    validToken: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case tokenValidated:
            if (action.payload)
                return { ...state, validToken: true, }
            else {
                localStorage.removeItem(userKey)
                return { ...state, validToken: false, user: null }
            }
        case userFetched:
            localStorage.setItem(userKey, JSON.stringify(action.payload))
            return { ...state, validToken: true, user: action.payload }
        default:
            return state
    }
}