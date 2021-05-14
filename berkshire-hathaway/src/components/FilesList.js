import React from 'react'
import File from './File'

export default function FilesList ({ filteredFiles, addBookmark }) {
    return (
        <table className='pa3 center' style={{minWidth: '800px'}} >
        <tbody>
          <tr>
            <th className='ph3' >
              <h3 className=''>Year</h3>
            </th>
            <th className='ph3' >
              <h3 className=''>Filename</h3>
            </th>
            <th className='ph3' >
              <h3 className=''>URL</h3>
            </th>
          </tr>
          {filteredFiles.map(file => <File key={file.id+'existing'} file={file} addBookmark={addBookmark} id='new' /> )}
        </tbody>
      </table>
    )
}
