import { ActionTypes } from "../containers/action-type";

const initialState = {
    products: [{
        id: 1,
        title: "Jinish",
        category: "Programmer",
    },],
}

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state
        default:
            return state;
    }
}