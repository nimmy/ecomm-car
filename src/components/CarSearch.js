import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { changeSearchTerms } from '../store';


const CarSearch = () => {
  const dispatch = useDispatch();

  const serachTerm = useSelector((state) => {
    return state.cars.searchTerm;
  });

  const handleSearchTerms = (event) => {
    dispatch(changeSearchTerms(event.target.value));
  }
  return (
    <div className='list-header'>
      <h3 className='title is-h3'>My Cars</h3>
      <div className='search-field is-horizontal'>
        <label className='label'>Search</label>
        <input className='input' value={serachTerm} onChange={handleSearchTerms} />
      </div>
    </div>
  )
}

export default CarSearch