import {MAP_RESULT} from '../actions/types'

export default function (state = [], action) {
    switch (action.type) {
        case MAP_RESULT:
            return action.payload;
        default:
            return state;
    }
}
