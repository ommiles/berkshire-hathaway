import React from 'react'
import File from './File'

// TODO Change route
export default function BookmarkedFilesList({ bookmarkedFiles, removeBookmark }) {
    return (
        <table className=''>
        <tbody>
          <tr>
            <th>
              <h3 className=''>Year</h3>
            </th>
            <th>
              <h3 className=''>Filename</h3>
            </th>
            <th>
              <h3 className=''>URL</h3>
            </th>
          </tr>
          {bookmarkedFiles.map(file => <File key={file.id+'new'} file={file} removeBookmark={removeBookmark} id='bookmarked' /> )}
        </tbody>
      </table>
    )
}