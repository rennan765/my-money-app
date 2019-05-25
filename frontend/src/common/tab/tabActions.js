import getTypes from '../../main/actionTypes'

const { tabSelected, tabShowed } = getTypes()

export function selectTab (tabId) {
    return {
        type: tabSelected,
        payload: tabId
    }
}

export function showTabs (...tabIds) {
    const tabsToShow = {}
    tabIds.forEach(e => tabsToShow[e] = true)
    return {
        type: tabShowed,
        payload: tabsToShow
    }
}