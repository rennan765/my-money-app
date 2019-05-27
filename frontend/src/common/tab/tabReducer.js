import { getActionTypes } from '../../main/consts'

const INITIAL_STATE = { selected: '', visible: {} }
const { tabSelected, tabShowed } = getActionTypes()

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case tabSelected:
            return { ...state, selected: action.payload }
        case tabShowed:
            return { ...state, visible: action.payload }
        default:
            return state
    }
}