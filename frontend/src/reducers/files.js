import { GET_FILES, ADD_FILE, DELETE_FILE, UPDATE_FILE } from "../actions/types.js";

const initialState = {
    files: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_FILES:
            return {
                ...state,
                files: action.payload
            };
        case DELETE_FILE:
            return {
                ...state,
                files: state.files.filter(file => file.id !== action.payload)
            };
        case ADD_FILE:
            return {
                ...state,
                files: [...state.files, action.payload]
            };
        default:
            return state;
    }
}