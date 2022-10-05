import {LOAD_SINGLE_USER, LOAD_USERS} from "../actions/actions";

const usersReducer = (state = {users: [], user: null}, action) => {
    const {type, payload} = action;

    switch (type) {
        case LOAD_USERS:
            return {...state, users: payload};

        case LOAD_SINGLE_USER:
            const user = state.users.find(user => user.id === payload);
            return {...state, user};

        default:
            console.error('error');
            return state;

    }
}

export {
    usersReducer
}