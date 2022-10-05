import {createStore} from "redux";

import {reducer} from "./combine";

const store = createStore(reducer);

export {
    store
}