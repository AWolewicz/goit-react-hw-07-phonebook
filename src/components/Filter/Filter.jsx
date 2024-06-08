import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/filterSlice';
import { nanoid } from '@reduxjs/toolkit';

export const Filter = () => {
    const dispatch = useDispatch();
    const filterInput = nanoid();

    const handleChange = event => {
        const filter = event.target.value;
        dispatch(setFilter(filter));
        console.log(filter)
    };

    return (
        <>
            <h5>Find contacts by name</h5>
            <input
                type="text"
                name="filter"
                id={filterInput}
                onChange={handleChange}
                placeholder="Search contacts"
            />
        </>);
};