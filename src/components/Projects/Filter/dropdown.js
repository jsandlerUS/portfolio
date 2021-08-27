import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';


const Dropdown = () => {
    const filterSelection = useSelector(state => state.filterSelection);
    const projects = useSelector(state => state.projects);

    const dispatch = useDispatch();
    let filterOptions = projects.reduce((acc, project) => [...acc, project.techStack], [])
    //merge all arrays and remove duplicates
    filterOptions = [...new Set(filterOptions.reduce((prev, current) => [...prev, ...current], []))]


    const setFilter = (selectedFilter) => {
        let indexFilter = filterSelection.indexOf(selectedFilter);
        indexFilter !== -1 ?
        dispatch({type: 'REMOVE_FILTER', indexFilter}) :
        dispatch({type: 'ADD_FILTER', selectedFilter}) 
    }
    return (
        <div className="dropdown">
            {filterOptions.map(item =>
                <div className="dropdownItem" onClick={() => setFilter(item)} key={item}>
                    {item}{(filterSelection.indexOf(item) === -1) ? <RadioButtonUncheckedIcon /> : <CheckCircleIcon />}
                </div>
                )}
        </div>
    )
}


export default Dropdown;