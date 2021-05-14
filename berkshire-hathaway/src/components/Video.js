import React from 'react';

const Video = ({ video }) => {
        return (
            <tr>
                <td className='ph2' >{video.year}</td>
                <td className='ph2' >{video.videoname}</td>
                <td className='ph2' ><a className='link' href={video.url}>{video.source}</a></td>
                {/* <td className='ph2' > {id === 'new' ? <button id={video.id} onClick={(e) => addBookmark(e, video)} > Bookmark video</button> : <button id={video.id} onClick={(e) => removeBookmark(e, video)} >Remove Bookmark</button> }  </td> */}
            </tr>
        )
}

export default Video;
