import { combineReducers } from 'redux'

import employee from './employee'
import increment from './increment'

export default combineReducers({
    employee,
    increment,
})
