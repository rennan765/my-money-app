import { getActionTypes } from '../main/consts'

const INITIAL_STATE = { list: [] }
const { billingCyclesFetched } = getActionTypes()

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case billingCyclesFetched:
            return { ...state, list: action.payload.data }
        default:
            return state
    }
}