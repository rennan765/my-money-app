export function getActionTypes () {
    return {
        billingCyclesFetched: 'BILLING_CYCLES_FETCHED',
        billingSummaryFetched: 'BILLING_SUMMARY_FETCHED',
        tabSelected: 'TAB_SELECTED',
        tabShowed: 'TAB_SHOWED',
        tokenValidated: 'TOKEN_VALIDATED',
        userFetched: 'USER_FETCHED'
    }
}

export function getEndpoints () {
    return {
        API_URL: 'http://localhost:3003/api',
        OAPI_URL: 'http://localhost:3003/oapi'
    }
}