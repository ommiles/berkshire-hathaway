import React from 'react';

const File = ({ file, addBookmark, removeBookmark, id }) => {
        return (
            <tr>
                <td className='ph3 pv2' >{file.year}</td>
                <td className='ph3 pv2' >{file.filename}</td>
                <td className='ph3 pv2' ><a className='link' target="_blank" href={file.url}>{file.source}</a></td>
                <td className='ph3 pv2' > {id === 'new' ? <button id={file.id} onClick={(e) => addBookmark(e, file)} > Bookmark File</button> : <button id={file.id} onClick={(e) => removeBookmark(e, file)} >Remove Bookmark</button> }  </td>
            </tr>
        )
}

export default File;