import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'
import getTypes from '../main/actionTypes'
import getEndpoints from '../main/endpoints'

const { API_URL } = getEndpoints()
const { billingCyclesFetched } = getTypes()
const INITIAL_VALUES = { credits: [{}], debts: [{}] }

function submit (values, method) {
    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](`${API_URL}/billingCycles/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso.')
                dispatch(init())
            })
            .catch(e => e.response.data.errors.forEach(error => toastr.error('Erro', error)))
    }
}

export function getList () {
    const request = axios.get(`${API_URL}/billingCycles`)

    return {
        type: billingCyclesFetched,
        payload: request
    }
}

export function create (values) {
    return submit(values, 'post')
}

export function update (values) {
    return submit(values, 'put')    
}

export function remove (values) {
    return submit(values, 'delete')
}

export function showUpdate (billingCycle) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function showDelete (billingCycle) {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function init () {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}
