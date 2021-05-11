import React from 'react';

const Search = ({ search }) => {
    return (
        <div className=''>
            <input
            type='text'
            placeholder={'Search Files'}
            onChange={search}
            />
            <i className=''></i>
        </div>
    )
}

export default Search;