import { VisibilityFilters } from './../actions'

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            console.log("reducers visibility: ", action.type)
            return action.filter
        default:
            return state
    }
}

export default visibilityFilter