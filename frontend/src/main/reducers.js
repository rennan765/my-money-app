import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import billingCycleReducer from '../billingCycle/billingCycleReducer'
import dashboardReducer from '../dashboard/dashboardReducer'
import tabReducer from '../common/tab/tabReducer'

const rootReducer = combineReducers({
    billingCycle: billingCycleReducer,
    dashboard: dashboardReducer,
    form: formReducer,
    tab: tabReducer,
    toastr: toastrReducer
})

export default rootReducer