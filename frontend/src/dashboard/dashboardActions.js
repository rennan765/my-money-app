import axios from 'axios'

import getTypes from '../main/actionTypes'
import getEndpoints from '../main/endpoints'

const { billingSummaryFetched } = getTypes()

const { API_URL } = getEndpoints()

export function getSummary () {
    const request = axios.get(`${API_URL}/billingCycles/summary`)
    return {
        type: billingSummaryFetched,
        payload: request
    }
}