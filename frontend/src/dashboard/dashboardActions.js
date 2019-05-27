import axios from 'axios'

import { getActionTypes, getEndpoints } from '../main/consts'

const { billingSummaryFetched } = getActionTypes()
const { API_URL } = getEndpoints()

export function getSummary () {
    const request = axios.get(`${API_URL}/billingCycles/summary`)
    return {
        type: billingSummaryFetched,
        payload: request
    }
}