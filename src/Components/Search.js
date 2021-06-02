import {useState} from 'react';
import './Search.scss';

const Search = ({searchHandler}) => {

    const [input, setInput] = useState("");

    const modifyValue = (value) => {
        value = value.trim();        
        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }

    const changeHandler = (e) => {        
        const value = e.target.value;
        setInput(value);
        searchHandler(modifyValue(value));
    }

    return (
        <input className="search" placeholder="Search website by name..."  onChange={changeHandler} value={input}/>
    )
}

export default Search;