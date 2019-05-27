import { getActionTypes } from '../../main/consts'

const { tabSelected, tabShowed } = getActionTypes()

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