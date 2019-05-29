import { getActionTypes } from '../main/consts'

const INITIAL_STATE = { summary: { credit: 0, debt: 0 } }
const { billingSummaryFetched } = getActionTypes()

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case billingSummaryFetched:
            return { ...state, summary: action.payload.data }
        default:
            return state
    }
}