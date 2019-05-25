import getTypes from '../main/actionTypes'

const INITIAL_STATE = { summary: { credit: 0, debt: 0 } }
const { billingSummaryFetched } = getTypes()

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case billingSummaryFetched:
            return { ...state, summary: action.payload.data }
        default:
            return state
    }
}