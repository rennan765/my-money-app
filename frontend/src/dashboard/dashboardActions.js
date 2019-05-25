import axios from 'axios'

import getTypes from '../main/actionTypes'

const { billingSummaryFetched } = getTypes()

const URL = 'http://localhost:3003/api/billingCycles'

export function getSummary () {
    const request = axios.get(`${URL}/summary`)
    return {
        type: billingSummaryFetched,
        payload: request
    }
}