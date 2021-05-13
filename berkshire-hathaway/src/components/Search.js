import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const element = <FontAwesomeIcon icon={faSearch} />

const Search = ({ search }) => {
    return (
        <div className='pa3 m5'>
            <i className=''>{element}</i>
            <input
            type='text'
            className='bn'
            placeholder={'Search Files'}
            onChange={search}
            />
            
        </div>
    )
}

export default Search;