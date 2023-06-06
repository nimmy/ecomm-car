import {createSlice, nanoid} from '@reduxjs/toolkit';

const carSlice = createSlice({
    name: "cars",
    initialState: {
        searchTerm: '',
        cars: []
    },
    reducers: {
        changeSearchTerms(state, action) {
            state.searchTerm = action.payload
        },
        addCar(state,action) {
            // assumption
            // action.payload({name: 'xyz', cost: $400})
            state.cars.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()
            })
        },
        removeCars(state, action) {
            const updatedCars = state.cars.filter(car => car.id !== action.payload.id);
            state.cars = updatedCars;
        }
    }
});


export const { changeSearchTerms, addCar, removeCars } = carSlice.actions;
export const carReducer = carSlice.reducer;