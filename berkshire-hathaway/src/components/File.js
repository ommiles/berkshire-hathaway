import React from 'react';

const File = ({ file, addBookmark, removeBookmark }) => {
        return (
            <tr>
                <td>{file.year}</td>
                <td>{file.filename}</td>
                <td><a href={file.url}>{file.source}</a></td>
                // TODO: Conditionall render button if it's bookmarked already
                <td><button id={file.id} onClick={(e) => addBookmark(e, file)} >Bookmark</button></td>
            </tr>
        )
}

export default File;