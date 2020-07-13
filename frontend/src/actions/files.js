import axios from 'axios';
import apihost from '../apihost';

import { GET_FILES, ADD_FILE, DELETE_FILE, UPDATE_FILE } from './types';

// GET FILES
export const getFiles = () => dispatch => {
    axios.get('api/drive')
    .then(res => {
        dispatch({
            type: GET_FILES,
            payload: res.data
        });
    })
    .catch(err => console.log(err.response.data));
}

// ADD FILES
export const addFile = file => dispatch => {
    axios.post('api/drive', file)
    .then(res => {
        dispatch({
            type: ADD_FILE,
            payload: res.data
        });
    })
    .catch(err => console.log(err.response.data));
}

// DELETE FILES
export const deleteFile = (id) => dispatch => {
    axios.delete(`api/drive${id}/`)
    .then(res => {
        dispatch({
            type: DELETE_FILE,
            payload: res.data
        });
    })
    .catch(err => console.log(err.response.data));
}

// UPDATE FILES
export const updateFile = (id) => dispatch => {
    axios.put(`api/drive${id}/`)
    .then(res => {
        dispatch({
            type: UPDATE_FILE,
            payload: res.data
        });
    })
    .catch(err => console.log(err.response.data));
}