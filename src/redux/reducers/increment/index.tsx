import { ReducerIncrementTypes, IAction } from 'src/redux/types'

export const DECREMENT = 'INCREMENT:DECREMENT'
export const INCREMENT = 'INCREMENT:INCREMENT'
export const RESET = 'INCREMENT:RESET'

export const DECREMENT_SAGA = 'INCREMENT:DECREMENT_SAGA'
export const INCREMENT_SAGA = 'INCREMENT:INCREMENT_SAGA'
export const RESET_SAGA = 'INCREMENT:RESET_SAGA'

const initialState: ReducerIncrementTypes = {
        data: 0,
    },
    reducer = (state: ReducerIncrementTypes = initialState, action: IAction) => {
        switch (action.type) {
            case INCREMENT:
                return { ...state, data: state.data + 1 }
            case DECREMENT:
                return { ...state, data: state.data - 1 }
            case RESET:
                return { ...state, data: 0 }
            default:
                return state
        }
    }

export default reducer
