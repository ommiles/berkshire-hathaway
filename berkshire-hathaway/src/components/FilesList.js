import React from 'react'
import File from './File'

export default function filesList({ filteredFiles, addBookmark }) {
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
          {filteredFiles.map(file => <File key={file.id} file={file} addBookmark={addBookmark} /> )}
        </tbody>
      </table>
    )
}
