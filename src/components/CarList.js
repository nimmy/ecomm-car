import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { removeCars } from '../store';


const CarList = () => {
  const dispatch = useDispatch()

  const cars = useSelector(({cars: {cars, searchTerm}}) => {
    return cars.filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase()) );
  });

  console.log(cars);
  const handleCarDelete = (car) => {
    dispatch(removeCars(car));
  }

  const renderedCars = cars.map(car => {
    return (
      <div key={car.id} className='panel'>
      <p>{car.name} - ${car.cost}</p>
      <button className='button is-danger' onClick={() => handleCarDelete(car)}>Delete</button>
    </div>
    )
  });


  return (
    <div className='car-list'>{renderedCars} <hr /></div>
  )
}

export default CarList