import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import getEndpoints from '../main/endpoints'
import getTypes from '../main/actionTypes';

const { OAPI_URL } = getEndpoints()
const { userFetched, tokenValidated } = getTypes()

export function login (values) {
    return submit(values, `${OAPI_URL}/login`)
}

export function signup (values) {
    return submit(values, `${OAPI_URL}/signup`)
}

export function logout () {
    return { type: tokenValidated, payload: false }
}

export function validateToken (token) {
    return dispatch => {
        if (token) {
            axios.post(`${OAPI_URL}/validateToken`, { token })
                .then(resp => dispatch({ type: tokenValidated, payload: resp.data.valid }))
                .catch(e => dispatch({ type: tokenValidated, payload: false }))
        } else {
            return { type: tokenValidated, payload: false }
        }
    }
}

function submit(values, url) {     
    return dispatch => {         
        axios.post(url, values)             
            .then(resp => dispatch([{type: userFetched, payload: resp.data}]))
            .catch(e => e.response.data.errors.forEach(error => toastr.error('Erro', error)))
    } 
}
