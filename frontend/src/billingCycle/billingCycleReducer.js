import getTypes from '../main/actionTypes'

const INITIAL_STATE = { list: [] }
const { billingCyclesFetched } = getTypes()

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case billingCyclesFetched:
            return { ...state, list: action.payload.data }
        default:
            return state
    }
}