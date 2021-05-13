import React from 'react';

const File = ({ file, addBookmark, removeBookmark, id }) => {
        return (
            <tr>
                <td>{file.year}</td>
                <td>{file.filename}</td>
                <td><a href={file.url}>{file.source}</a></td>
                <td> {id === 'new' ? <button id={file.id} onClick={(e) => addBookmark(e, file)} > Bookmark File</button> : <button id={file.id} onClick={(e) => removeBookmark(e, file)} >Remove Bookmark</button> }  </td>
            </tr>
        )
}

export default File;