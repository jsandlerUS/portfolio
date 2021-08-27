import React, { useState, useEffect, useRef } from "react";
import { useSelector} from 'react-redux';
import Dropdown from "./dropdown";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const Filter = () =>{
    const [displayOptions, setDisplayOptions] = useState(false)
    const filterSelection = useSelector(state => state.filterSelection);
    const wrapperRef = useRef(null);


    useEffect(() => {
        window.addEventListener("mousedown", handleClickOutside);
        return () => {
            window.removeEventListener("mousedown", handleClickOutside);
        };
    });

    const handleClickOutside = event => {
        const { current: wrap } = wrapperRef;
        if (wrap && !wrap.contains(event.target)) {
            setDisplayOptions(false);
        }
    };
    
    return (
        <div className="filter" ref={wrapperRef}>
            <div className="filterTitle">Search by:&nbsp;</div>
            <div className="filterOption" onClick={() => setDisplayOptions(!displayOptions)}>{
                filterSelection.length > 0 ? 
                    filterSelection[filterSelection.length - 1] : 'All'} <KeyboardArrowDownIcon/>
                {displayOptions ? <Dropdown/> : null}
            </div>
        </div>
    )
}

export default Filter