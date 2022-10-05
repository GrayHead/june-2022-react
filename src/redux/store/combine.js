import {combineReducers} from "redux";

import {postsReducer} from "../reducers/posts.reducer";
import {usersReducer} from "../reducers/users.reducer";
import {commentsReducer} from "../reducers/comments.reducer";

const reducer = combineReducers({
    commentsReducer,
    postsReducer,
    usersReducer
});

export {
    reducer
}