import {LOAD_COMMENTS} from "../actions/actions";

const commentsReducer = (state = {comments: []}, action) => {
    const {type, payload} = action;

    switch (type) {
        case LOAD_COMMENTS:
            return {...state, comments: payload};
        default:
            console.error('error');
            return state;

    }
}

export {
    commentsReducer
}