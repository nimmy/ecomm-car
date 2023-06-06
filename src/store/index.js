import { configureStore} from '@reduxjs/toolkit';
import { carReducer, addCar, removeCars, changeSearchTerms } from './Slices/CarSlice';
import { creationReducer, changeCost, changeName} from './Slices/CarCreationSlice';

const store = configureStore({
    reducer: {
        cars: carReducer,
        form: creationReducer
    }
});

export { store, changeCost, changeName, addCar, removeCars, changeSearchTerms};