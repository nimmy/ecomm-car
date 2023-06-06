import {createSlice} from '@reduxjs/toolkit';
import { addCar } from './CarSlice';

const carCreation = createSlice({
    name: 'carCreation',
    initialState:{
        name: '',
        cost: 0
    },
    reducers: {
        changeName(state, action) {
            state.name = action.payload; 
        },
        changeCost(state, action) {
            state.cost = action.payload;
        }
    },
    extraReducers(builder) {
        builder.addCase(addCar, (state, action) => {
            state.cost = 0;
            state.name = '';
        })
    }
});


export const { changeName, changeCost} = carCreation.actions;
export const creationReducer = carCreation.reducer;
// export default carCreation;