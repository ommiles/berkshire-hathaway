import React from 'react'
import Video from './Video'

export default function VideosList ({ videos }) {
    return (
        <table className='pa3 center'>
        <tbody>
          <tr>
            <th className='' >
              <h3 className=''>Year</h3>
            </th>
            <th className='' >
              <h3 className=''>Video Title</h3>
            </th>
            <th className='' >
              <h3 className=''>URL</h3>
            </th>
          </tr>
          {videos.map(video => <Video key={video.id} video={video} /> )}
        </tbody>
      </table>
    )
}